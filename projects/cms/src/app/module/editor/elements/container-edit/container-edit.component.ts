import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { EditorService } from '../../service/editor.service';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { EditorDraggingService } from '../../service/editor-dragging.service';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { slideFromBottomEnter } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { transition, trigger } from '@angular/animations';
import { ElementAttribute, ElementBase, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { TestDirective } from '../../directive/test-directive.directive';

@Component({
  selector: 'container-edit',
  templateUrl: './container-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('componentEnter', [
      transition(':enter', slideFromBottomEnter),
    ])
  ]
})
export class ContainerEditComponent implements OnInit {

  constructor(
    public host: ElementRef,
    private renderer: Renderer2,
    private editorService: EditorService,
    private editorDraggingService: EditorDraggingService,
    private cdr: ChangeDetectorRef,
  ) {}


  ngOnInit(): void {
    const f: Subscription = combineLatest([
      this.activeComponentsId$,
      this.xxx$
    ]).pipe(
      tap(data => {
        if (data[1].componentId) {          
          if (!data[0].includes(data[1].componentId)) {
            /*this.xxx$.next({
              componentId: null,
              text: ''
            });*/
            this.editorService.updateWebBlocksComponentText(data[1].text,data[1].componentId);
          }
        }
      })
    ).subscribe();
  }

  iHaveNoIdeaWhatIAmDoing = this.editorService.iHaveNoIdeaWhatIAmDoing.asObservable().pipe(
    tap(changes => {
      console.log(`update component - ${changes}`);
      setTimeout(() => {
        
        this.cdr.detectChanges();
      }, 500);
    })
  )
  testFuckeryState$ = this.editorService.testFuckeryState$;
  _data: WebBlocksComponent;
  @Input() set data(v: ReusableComponent) {
    console.log("new data");
    this._data = v.webBlocksComponent;
  };
  componentEnterId$: Observable<number> = this.editorService.componentMoveId$.asObservable().pipe(
    debounceTime(20),
    distinctUntilChanged(),
  );
  activeComponentsId$ = this.editorService.activeWebBlocksComponents$.pipe(
    map(c => c.map(x => x.elementBase.id)),
    tap(d => {
      console.log(d);
    })
  );
  stateStuff: Observable<any>;
  componentEnter(id: number) {
    this.editorService.componentMoveId$.next(id);
  }
  @ViewChild('cdkDrag') cdkDrag: any;

  dragReset() {
    this.cdkDrag._dragRef['_previewRect'] = undefined;
    this.cdkDrag._dragRef['_boundaryRect'] = undefined;
  }

  dragStart(e: CdkDragStart, component: WebBlocksComponent) {
    const s = this.editorService.state;
    console.log("Angular cdk drag start");
    const parentToMove = this.getTopParent(component);
    this.editorDraggingService.dragStart$.next(parentToMove);
    this.renderer.addClass(e.source.element.nativeElement,'pointer-events-none');
    this.renderer.addClass(e.source.element.nativeElement,'shadow-2xl');
    this.renderer.addClass(e.source.element.nativeElement,'z-index-max');
    this.renderer.addClass(e.source.element.nativeElement,'opacity-20');
  }

  // the issue is that sometimes we have only divs as containers that have the same size as the child so we
  // want to drag the top most div. We compare their domrect and if it is the same then we move to parent recursivly
  getTopParent(component: WebBlocksComponent): WebBlocksComponent {
    const parent = this.editorService.getParentContainer(component);
    console.log(component.elementBase.domRect);
    console.log(parent.elementBase.domRect);
    if (JSON.stringify(component.elementBase.domRect) === JSON.stringify(parent.elementBase.domRect)) {
      // the parent is the exactly same size
      // we try again..
      return this.getTopParent(parent)
    } else {
      return component
    }
  }

  dragEnd(e: CdkDragEnd) {
    this.renderer.removeClass(e.source.element.nativeElement,'pointer-events-none');
    this.editorDraggingService.dragEnd$.next(e);
  }

  dragMove(e: CdkDragMove) {
    this.editorDraggingService.dragMove$.next(e);
  }

  test(e: ElementBase, localComponent: ElementBase) {
    console.log(e);
    localComponent.cssClass = e.cssClass;
  }

  textValBuffer: any;
  xxx$: BehaviorSubject<{
    componentId: number,
    text: string
  }> = new BehaviorSubject<any>({
    componentId: null,
    text: ''
  });
  
  t(e,c:WebBlocksComponent,active: boolean) {

    this.xxx$.next(
      {
        componentId: c.elementBase.id,
        text: e
      }
    )
    console.log(e);
  }

}