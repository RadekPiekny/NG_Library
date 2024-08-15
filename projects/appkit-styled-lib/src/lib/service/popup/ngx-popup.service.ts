import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentRef, Injectable, Renderer2, RendererFactory2, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { filter, map, scan, switchMap, takeWhile } from 'rxjs/operators';
import { SnackBarComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/snack-bar';
import { IConfirmBar, ISnackBar, ISnackBarType } from '@rp_custom_library/appkit-styled-lib/src/lib/model/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NgxPopUpService {

  constructor(
    public overlay: Overlay,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const divElement = this.renderer.createElement('div') as HTMLDivElement;
    this.container = divElement;
    divElement.id = "ngx-popup-container";
    divElement.classList.add("fixed","bottom-4","z-50", "left-1/4","flex", "flex-col", "gap-2", "w-1/2", "mx-auto");
    this.renderer.appendChild(document.body, divElement);
  }

  viewContainerRef!: ViewContainerRef;
  container: HTMLDivElement;
  private renderer: Renderer2;
  overlayRef!: OverlayRef;
  maxSnacks: number = 3;
  positiveSnacksDuration = 3000;
  snacks: BehaviorSubject<ISnackBar[]> = new BehaviorSubject<ISnackBar[]>([]);
  snacks$: Observable<ISnackBar[]> = this.snacks.asObservable().pipe(
    map(snacks => {
      snacks.forEach(s => {
        const count: number = snacks.filter(ss => ss.message === s.message && ss.display && s.display).length;
        s.duplicate = count;
      })
      return snacks
    })
  );

  snacksShow$: Observable<ISnackBar[]> = this.snacks.pipe(
    map(snacks => {
      let snacksFinal: ISnackBar[] = [];
      const snacksSemiFinal:ISnackBar[] = snacks.filter(s => s.display);
      snacksSemiFinal.forEach(s => {
        const duplicates = snacksSemiFinal.filter(sf => sf.message === s.message);
        if (duplicates.length) {
          const LargestNum = Math.max(...duplicates.map(o => o.time.getTime()));
          const snack = snacksSemiFinal.filter(s => s.time.getTime() === LargestNum)[0];
          snacksFinal.push(snack);
        }

      })
      snacksFinal = snacksFinal.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)

      return snacksFinal
    })
  )

  confirmBar$: Subject<IConfirmBar> = new Subject<IConfirmBar>();
  confirmBarOk$: Subject<boolean> = new Subject<boolean>();

  snackResetTimer = new BehaviorSubject<number | null>(null);
  newSnack(type: ISnackBarType,message:string,duration?: number) {
    const currentDate: Date = new Date();
    const snacks:ISnackBar[] = [...this.snacks.getValue()];
    const timestamp: number = currentDate.getTime();
    const randomAdjust: number = Math.floor(Math.random() * 10000);
    const id: number = timestamp + randomAdjust;
    const newSnackBar: ISnackBar = {
      display: true,
      duration: duration,
      message: message,
      type: type,
      time: currentDate,
      id: id,
      position: snacks.filter(s => s.display).length,
      close: () => this.tf(id)
    }

    const duplicate = this.duplicates(newSnackBar);
    if (duplicate.count) {
      if (duplicate.snack && duplicate.snack.ref) {
        duplicate.snack.ref.instance.duplicate = duplicate.count;
      }
      if (newSnackBar.duration) {
        // reset timer
        if (duplicate.snack?.id) {
          this.snackResetTimer.next(duplicate.snack.id);
        }
      }
    } else {
      const ref = this.displayOverlay(newSnackBar);
      newSnackBar.ref = ref;
      //newSnackBar.ref = ref;
      if (newSnackBar.duration) {
        const s = this.snackResetTimer.asObservable().pipe(
          filter(id => id === newSnackBar.id),
          switchMap(() => {
            return timer(0, 1000).pipe(
              scan(acc => --acc, ((newSnackBar.duration ? newSnackBar.duration : 0)  + 1000) / 1000),
              takeWhile(x => x >= 0),
            )
          })
        ).subscribe(d => {
          ref.instance.counterDown = d;
        })
        if (newSnackBar.id) {
          
          this.snackResetTimer.next(newSnackBar.id);
        } else {
          this.snackResetTimer.next(null);
        }
        newSnackBar.timer = s;
      }
    }
    this.snacks.next([newSnackBar,...snacks]);
  }

  duplicates(snack: ISnackBar): {snack: ISnackBar | undefined, count: number} {
    const snacks:ISnackBar[] = [...this.snacks.getValue()];
    const duplicateSnacks = snacks.filter(s => s.message === snack.message && s.display);
    const activeSnack = duplicateSnacks.find(ds => ds.ref) // we return only the one with active instance of component
    return {
      snack: activeSnack,
      count: duplicateSnacks.length
    }
  }

  newSuccess(message: string, duration?: number) : void {
    this.newSnack(ISnackBarType.Success,message,duration);
  }

  newError(message: string, duration?: number): void {
    this.newSnack(ISnackBarType.Error,message,duration);
  }

  newWarning(message: string, duration?: number): void {
    this.newSnack(ISnackBarType.Warning,message,duration);
  }

  newConfirm(action: Function, message: string) {
    const confirmBar: IConfirmBar = {
      action: action,
      message: message
    }
    this.confirmBar$.next(confirmBar);
  }

  remove(id: number) {
    const snacks:ISnackBar[] = [...this.snacks.getValue()];
    const snackId: number = snacks.findIndex(s => s.id === id);
    const duplicates = snacks.filter(s => s.message === snacks[snackId].message);
    duplicates.forEach(s => s.display = false);
    if (snackId > -1) {
      snacks[snackId].display = false; //TODO snackbars are not removed from DOM only its content. The longer app is alive the bigger prolem this might be as the dom gets too poluted. We need to remove them compltely.
      snacks[snackId].ref.destroy(); // a year later -> probably solved..
    }
    this.snacks.next(snacks);
  }

  displayOverlay(newSnackBar: ISnackBar): ComponentRef<SnackBarComponent> {

    const id:string = new Date().getTime().toString();
    const ref = this.viewContainerRef.createComponent(SnackBarComponent);
    ref.instance.data = newSnackBar;
    
    this.renderer.appendChild(this.container, ref.location.nativeElement);
    return ref
  }

  tf(id: number) {
    this.remove(id);
  }
}