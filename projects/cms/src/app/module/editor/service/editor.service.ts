import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EditorStateService } from './editor-state.service';
import { CdkDragMove,CdkDragEnd } from '@angular/cdk/drag-drop';
import { Guid } from 'guid-typescript';
import cloneDeep from 'lodash/cloneDeep';
import { ElementBase, ElementCssClass, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { IHistoryDisabled, IPointCoordinate, IPropertyDisplay } from '../model/general';
import { generateDefaultWebBlocksComponent, generateDefaultPage, IWebBlocksComponentDropping } from '../model/element';
import { NgxPopUpService } from '@rp_custom_library/appkit-styled-lib/src/public-api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditorService extends EditorStateService {

  constructor(
    private ngxPopUpService: NgxPopUpService
  ) {
    super();
  }

  reset() {
    this.setState(null);
  }

  rcMapping: {id: number, name: string}[] = [];
  fwewef = 0;
  iHaveNoIdeaWhatIAmDoing: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  componentMoveId$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  activeWebBlocksComponents$: Observable<WebBlocksComponent[]> = this.activeWebBlocksComponent.asObservable();
  page$: Observable<ReusableComponent> = this.select(state => state);
  containerBorder: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  historyDisabled$: Observable<IHistoryDisabled> = this.historyDisabled.asObservable();
  idGenerator: number = 0;
  idGenerate(): number {
    this.idGenerator++;
    return this.idGenerator;
  }

  xx(cursorLocation: IPointCoordinate,component: WebBlocksComponent, draggedId: number, currentBestResult?: ElementBase) {
    currentBestResult = this.findBestFitDrop(cursorLocation,component,draggedId,currentBestResult);
    if (component.children?.length > 0) {
      component.children.forEach((child: ElementBase) => {
        currentBestResult = this.xx(cursorLocation,child,draggedId,currentBestResult);
      })
    }
    return currentBestResult
  }

  changeWebBlocksComponentName(newName: string) {
    const state: ReusableComponent = this.state;
    state.name = newName;
    this.setState(state);
  }

  changeWebBlocksGroupId(id: number) {
    const state: ReusableComponent = this.state;
    state.editorComponentGroupId = id;
    this.setState(state);
  }

  changeReusableComponentSkeletonId(id: number) {
    const state: ReusableComponent = this.state;
    state.skeletonWebBlocksComponentId = id;
    this.setState(state);
  }

  findBestFitDrop(cursorLocation: IPointCoordinate,component: ElementBase, draggedId: number, currentBestResult?: ElementBase): ElementBase {
    const withingX = cursorLocation.x > component.domRect.x && cursorLocation.x < component.domRect.x + component.domRect.width;
    const withingY = cursorLocation.y > component.domRect.y && cursorLocation.y < component.domRect.y + component.domRect.height;
    const sameWebBlocksComponent: boolean =  component.id === draggedId;
    if (withingX && withingY && !sameWebBlocksComponent) {
      currentBestResult = component;
    }
    return currentBestResult
  }

  checkIfCursorOutsideEditor(drag: CdkDragEnd): IPointCoordinate {
    // we need to set the last point for dropping but there might be border and perhaps other stuff
    // TODO this should be more systematic now its one giant meh. Maybe later(never or until this breaks)
    const borderAndStuff = 2; 
    const result: IPointCoordinate = {x: drag.dropPoint.x, y: drag.dropPoint.y};
    const rect: DOMRect = document.getElementById('editorView_Xoxo').getBoundingClientRect();
    const afterEditorX = drag.dropPoint.x > rect.x + rect.width;
    const afterEditorY = drag.dropPoint.y > rect.y + rect.height;
    const beforeEditorX = drag.dropPoint.x < rect.x;
    const beforeEditorY = drag.dropPoint.y < rect.y;

    if (afterEditorX) {
      result.x = rect.x + rect.width - borderAndStuff;
    }
    if (afterEditorY) {
      result.y = rect.y + rect.height - borderAndStuff;
    }
    if (beforeEditorX) {
      result.x = rect.x + borderAndStuff;
    }
    if (beforeEditorY) {
      result.y = rect.y + borderAndStuff;
    }
    return result;
  }

  componentDrop(componentDropping: IWebBlocksComponentDropping) {
    if (!componentDropping) {
      this.refreshState();
      return;
    }

    const state: ReusableComponent = this.state;

    const currentWebBlocksComponent: WebBlocksComponent = this.getWebBlocksComponent(componentDropping.component.elementBase.id,state.webBlocksComponent.children);
    const target: WebBlocksComponent = this.getWebBlocksComponent(componentDropping.target.elementBase.id,state.webBlocksComponent.children);
    const parent: WebBlocksComponent = this.getParentContainer(componentDropping.component,state.webBlocksComponent); // parent of dragged component
    const parentOfTarget: WebBlocksComponent = this.getParentContainer(componentDropping.target,state.webBlocksComponent); // parent of dragged component

    this.removeWebBlocksComponent(componentDropping.component,parent);
    if (componentDropping.position === 'in') {
      target.children.push(currentWebBlocksComponent);
    }
    if (componentDropping.position === 'after') {
      const index: number = parentOfTarget.children.findIndex(c => c.elementBase.id === target.elementBase.id);
      console.log(index);
      parentOfTarget.children = [
        ...parentOfTarget.children.slice(0, index+1),
        currentWebBlocksComponent,
        ...parentOfTarget.children.slice(index+1)
      ]
    }
    if (componentDropping.position === 'before') {
      const index: number = parentOfTarget.children.findIndex(c => c.elementBase.id === target.elementBase.id);
      if (index > -1) {
        parentOfTarget.children = [
          ...parentOfTarget.children.slice(0, index),
          currentWebBlocksComponent,
          ...parentOfTarget.children.slice(index)
        ]
      }

    }
    
    this.setState(state);
    this.refreshState(); 
    /*setTimeout(() => {
      // TODO for some reason when I drop button on textelement the dom does not get refreshed right away
      /// but need additional actions to get current state or use this function. For now 'works => no touch'
    });*/

  }

  deleteWebBlocksComponent(component: WebBlocksComponent) {
    const state: WebBlocksComponent = this.state;
    const parent: WebBlocksComponent = this.getParentContainer(component,state.elementBase);
    this.removeWebBlocksComponent(component,parent);
    this.setState(state);
    this.deactivateAllWebBlocksComponents();
  }

  removeWebBlocksComponent(component: WebBlocksComponent, parent: WebBlocksComponent) {
    const newChildren = parent.children.filter(c => c.elementBase.id !== component.elementBase.id);
    if (newChildren.length === 0) {
      parent.children = []; // for some reason if there are no elements then spread operator removes the propery alltoghether
    } else {
      parent.children = [...newChildren];
    }
  }

  addWebBlocksComponent(f: Function) {
    const state: WebBlocksComponent = this.state;

    const ac: WebBlocksComponent[] = [];
    this.activeWebBlocksComponents.forEach(componentGroup => {
      const c = this.getWebBlocksComponent(componentGroup.elementBase.id,state.children);
      ac.push(c);
    })
    if (ac.length > 0) {      
      ac.forEach(c => {

        const newWebBlocksComponent: ElementBase = f();
        c.children.push(newWebBlocksComponent);
      })
    } else {
      const newWebBlocksComponent: ElementBase = f();
      state.children.push(newWebBlocksComponent);
    }
    this.setState(state);
  }

  addGenericWebBlocksComponent(component: WebBlocksComponent) {
  
    const state: ReusableComponent = this.state;

    const ac: WebBlocksComponent[] = [];
    this.activeWebBlocksComponents.forEach(componentGroup => {
      const c = this.getWebBlocksComponent(componentGroup.elementBase.id,state.webBlocksComponent.children);
      if (c) {
        ac.push(c);
      } else {
        ac.push(componentGroup);
      }
    })
    if (ac.length > 0) {
      ac.forEach(c => {
        if (c.elementBase.className === 'p') {
          this.ngxPopUpService.newWarning("You cannot put component inside a text!");
          return;
        }
        if (c.elementBase.className === 'img') {
          this.ngxPopUpService.newWarning("You cannot put component inside an image!");
          return;
        }
        c.children.push(component);

      })
    } else {
      if (!state.webBlocksComponent) {
        state.webBlocksComponent = component;
        this.setState(state);
        this.refreshState(); // its fucked up. It does not work without this. Something with reference object as refresh just do cloning and setting next state
        return;
      } else {
        if (state.webBlocksComponent.elementBase) {
          state.webBlocksComponent.children.push(component);
        } else {
          state.webBlocksComponent.elementBase = component;
        }
      }
    }
    this.setState(state);
    this.refreshState();
  }

  updateWebBlocksComponentText(text: string, id: number) {
    const state: ReusableComponent = this.state;
    const c = this.getWebBlocksComponent(id,state.webBlocksComponent.children);
    if (c) {
      const innerHTML = c.elementBase.attributes.find(a => a.name === 'innerHTML');
      if (!innerHTML) {
        c.elementBase.attributes.push(
          {
            name: 'innerHTML',
            value: text
          }
        )
      } else {
        innerHTML.value = text;
      }
    } else {
      state.webBlocksComponent.elementBase.attributes.find(a => a.name === 'innerHTML').value = text;
    }

    this.setState(state);
  }

  updateWebBlocksComponentData(data: WebBlocksComponent) {
    const parent: WebBlocksComponent = this.getParentContainer(data,this.state.webBlocksComponent);
    if (!parent) { //data.elementBase.id === parent.elementBase.id
      const state: ReusableComponent = this.state;
      state.webBlocksComponent.elementBase = data.elementBase;
      this.setState(state);
      this.refreshState();
      return;
    }
    const index: number = parent.children.findIndex(e => e.elementBase.id === data.elementBase.id);
    const before: ElementBase[] = parent.children.slice(0,index);
    const after: ElementBase[] = parent.children.slice(index+1);
    const x = cloneDeep(data);
    parent.children = [...before,x,...after];
    this.setState(this.state);
  }

  getState(): ReusableComponent {
    return this.state
  }

  browseHistory(timeUnit: number) {
    this.setStateHistory(timeUnit);
  }
  
  removeWebBlocksComponent$: Subject<string> = new Subject<string>();

  activateWebBlocksComponent(componentGroup: WebBlocksComponent) {
    let activeWebBlocksComponents: WebBlocksComponent[] = this.activeWebBlocksComponents;
    const index = activeWebBlocksComponents.findIndex(c => c.elementBase.id === componentGroup.id);
    if (index > -1) {
      if (componentGroup.elementBase.className === 'TextWebBlocksComponent' || componentGroup.elementBase.className === 'p') {
        return;
      }
      activeWebBlocksComponents.splice(index,1);
    } else {
      activeWebBlocksComponents = []; // perhaps iun future we want to remain activated components in the array so that we delete multiple etc. For now this is better
      activeWebBlocksComponents.push(componentGroup);
    }
    this.setActiveWebBlocksComponent(activeWebBlocksComponents);
  }
  
  deactivateAllWebBlocksComponents() {
    this.setActiveWebBlocksComponent([]);
  }

  getParentContainer(component: WebBlocksComponent, container: WebBlocksComponent = this.state.webBlocksComponent): WebBlocksComponent | null {
    if (component.elementBase.id == 0) { // its the first element that got id hence its the root
      return container;
    }
    let result = null;
    if (container.children && container.children.some((d) => d.elementBase.id === component.elementBase.id)) {
      return container;
    } else if (container.children && container.children.length > 0) {
      for (const child of container.children) {
        result = this.getParentContainer(component, child);
        if (result) {
          break;
        };
      }
    }
    return result
  }

  getWebBlocksComponent(id: number, parent: WebBlocksComponent[]): WebBlocksComponent {
    let result: WebBlocksComponent = parent?.filter(c => c.elementBase.id === id)[0];
    if (!result) {
      for (let c of parent) {
        if (c.children && c.children.length > 0) {
          result = this.getWebBlocksComponent(id,c.children);
          if (result) {
            break;
          };
        }
      }
    }
    return result
  }

  showJSON(): ReusableComponent {
    const state: ReusableComponent = cloneDeep(this.rawState);
    this.cleanReusableComponent(state);
    return state
  }

  cleanReusableComponent(rc: ReusableComponent): ReusableComponent {
    delete rc.id;
    delete rc.webBlocksComponentId;
    this.cleanWebBlocksComponentJSON(rc.webBlocksComponent);
    return rc;
  }

  cleanWebBlocksComponentJSON(component: WebBlocksComponent) {
    delete component.elementBase.domRect;
    delete component.elementBase.id;
    delete component.parentId;
    delete component.rootId;
    delete component.id;
    delete component.elementBaseId;
    delete component.reusableComponentId;
    if (component.reusableComponentId == 0) {
      component.reusableComponentId = null;
    }
    component.elementBase.cssClass.forEach(cssClass => {
      delete cssClass.id;
    })
    if (component.elementBase.files) {
      component.elementBase.files.forEach(f => {
        delete f.id;
        delete f.elementBaseId;
      })
    }
    if (component.elementBase.attributes) {
      component.elementBase.attributes.forEach(a => {
        delete a.id;
        delete a.elementBaseId;
      })
    }
    if (component.children?.length > 0) {
        component.children.forEach(child => {
          this.cleanWebBlocksComponentJSON(child);
        })
    }
    return component;
  }

  changePropertyVisibility(id: number, propChange: IPropertyDisplay) {
    const state: WebBlocksComponent = this.state;
    const compoent: ElementBase = this.getWebBlocksComponent(id, state.children);
  }

  duplicateComponent(component: WebBlocksComponent) {
    const newComponent: WebBlocksComponent = cloneDeep(component);
    const newComponentWidthIds = this.newIds(newComponent);
    const state: ReusableComponent = this.state;
    const parent: WebBlocksComponent = this.getParentContainer(component,state.webBlocksComponent);
    const index = parent.children.findIndex(c => c.elementBase.id === component.elementBase.id);
    parent.children = [
      ...parent.children.slice(0, index+1),
      newComponentWidthIds,
      ...parent.children.slice(index+1)
    ]
    this.setState(state);
  }

  newIds(e: WebBlocksComponent): WebBlocksComponent {
    e.elementBase.id = this.idGenerate();
    if (e.children.length) {
      e.children.forEach(wbc => {
        this.newIds(wbc)
      })
    }
    return e
  }

  initState(newState: ReusableComponent | null, groupId?: number) {
    if (newState.webBlocksComponent) { // if we want to create a new component we dont want any starting comp      
      const newComponentWidthIds = this.newIds(newState.webBlocksComponent);
      newState.webBlocksComponent = newComponentWidthIds;
      newState.webBlocksComponent.reusableComponentId = newState.id;
      if (groupId) {
        newState.editorComponentGroupId = groupId;
      }
    }
    this.setState(newState,false);
  }

  initComponentState(c: WebBlocksComponent) {
    const state: ReusableComponent = this.state;
    state.webBlocksComponent = c;
    this.setState(state,false);
  }

}
