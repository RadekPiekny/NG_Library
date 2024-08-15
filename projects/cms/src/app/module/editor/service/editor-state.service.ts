import { BehaviorSubject, Observable } from 'rxjs';
import cloneDeep from 'lodash/cloneDeep';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { IHistoryDisabled } from '../model/general';
import { ElementBase, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { Injectable } from '@angular/core';

@Injectable()
export class EditorStateService {
  
  
  private historyTime: number = 0;
  private state$: BehaviorSubject<ReusableComponent> = new BehaviorSubject<WebBlocksComponent>(null);
  private historyState$: BehaviorSubject<ReusableComponent[]> = new BehaviorSubject<ReusableComponent[]>([]);
  activeWebBlocksComponent: BehaviorSubject<WebBlocksComponent[]> = new BehaviorSubject<ElementBase[]>([]); 


  testFuckeryState$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  get state(): ReusableComponent {
    if (this.state$.getValue()) {
      this.updateDomRect(this.state$.getValue().webBlocksComponent);
    }
    return this.state$.getValue();
  }

  get rawState(): ReusableComponent {
    return this.state$.getValue()
  }
  protected get activeWebBlocksComponents(): WebBlocksComponent[] {
    return [...this.activeWebBlocksComponent.getValue()];
  }

  protected select<K>(mapFn: (state: ReusableComponent) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: WebBlocksComponent) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: ReusableComponent, addToHistory: boolean = true) {
    if (addToHistory) {
      const c = cloneDeep(newState);
      this.historyState$.next([...this.historyState$.getValue(),c]);
    }
    this.state$.next(newState);
    console.log(this.historyState$.getValue());
    const disableBackward: boolean = this.historyState$.getValue().length + this.historyTime - 1 < 1;
    const disableForward: boolean = (this.historyState$.getValue().length + this.historyTime) >= this.historyState$.getValue().length;
    this.historyDisabled.next({backward: disableBackward, forward: disableForward});
    this.testFuckeryState$.next();
  }

  protected updateDomRect(component: WebBlocksComponent) {
    if (!component) {
      return;
    }
    component.elementBase.domRect = document.getElementById(component.elementBase.id.toString())?.getBoundingClientRect(); 
    if (component.children?.length > 0) {
      component.children.forEach(child => {
        this.updateDomRect(child);
      })
    }
  }


  protected historyDisabled: BehaviorSubject<IHistoryDisabled> = new BehaviorSubject<IHistoryDisabled>({backward: true, forward: true})

  protected setStateHistory(timeUnit: number) {
    let _historyTime = this.historyTime;
    _historyTime += timeUnit;
    const historyState = this.historyState$.getValue();
    this.historyTime = _historyTime;
    console.log("this.historyTime", this.historyTime);
    console.log("history index", historyState.length -1 + this.historyTime);
    const requiredState = cloneDeep(historyState[historyState.length -1 + this.historyTime]);
    this.setState(requiredState, false);
  }

  protected refreshState() {
    const c = cloneDeep(this.state);
    this.state$.next(c);
  }

  protected setActiveWebBlocksComponent(v: ElementBase[]) {
    this.activeWebBlocksComponent.next(v);
  }
}
