import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { EditorService } from './editor.service';
import { CdkDragMove,CdkDragEnd } from '@angular/cdk/drag-drop';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, repeat, switchMap, take, tap } from 'rxjs/operators';
import { IWebBlocksComponentDropping, TComponentDragPositions } from '../model/element';
import { IDragElementCssStyles, IPointCoordinate } from '../model/general';
import { ElementBase, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';

@Injectable({
  providedIn: 'root'
})
export class EditorDraggingService {

  constructor(
    private editorService: EditorService
  ) { }

  renderer: Renderer2;

  dragElementCssStyles: IDragElementCssStyles = {top: 'initial', left: 'initial', height: 'initial', transform: 'none', width: 'initial'};
  dragHelper: ElementRef<HTMLDivElement>;
  dragStart$: Subject<WebBlocksComponent> = new Subject<WebBlocksComponent>();
  mouseUp$ = fromEvent(document, 'mouseup');
  dragMove$: Subject<CdkDragMove> = new Subject<CdkDragMove>();
  dragEnd$: Subject<CdkDragEnd> = new Subject<CdkDragEnd>();
  componentDropping: IWebBlocksComponentDropping;
  ratioMoveToNext = 0.1; // in percent
  ratioMoveToNextAbsoluteMax = 30; // px
  ratioMoveToNextAbsoluteMin = 10; // px

  dragging$: Observable<{cdkDragMove: CdkDragMove, state: WebBlocksComponent, component: WebBlocksComponent}> = this.dragStart$.pipe(
    switchMap(data => {
      return this.dragMove$.asObservable().pipe(map(d => {
        return {
          cdkDragMove: d, 
          state: this.editorService.state.webBlocksComponent,
          component: data
        }
      }))
    })
  )

  startDragging: Observable<any> = this.dragStart$.pipe(
    switchMap((component: ElementBase) => {
      return this.dragEnd$.pipe(tap(d => {
        console.log("drag end");
        this.editorService.componentDrop(this.componentDropping);
      }))
    }),
    take(1),
    repeat()
  )
  
  ff(d: {cdkDragMove: CdkDragMove, state: WebBlocksComponent, component: WebBlocksComponent}): string | null {
    let componentOver = this.xx(d.cdkDragMove.pointerPosition,d.state,d.component.elementBase.id);
    let containerOver: WebBlocksComponent;
    let parentContainer: WebBlocksComponent;
    let bestComponentFit: WebBlocksComponent;
    let smallestDistance: number = 5000; // could not think of anything better. We start with some high unreasonable number; Px in sceen.
    let position: TComponentDragPositions;
    if (!componentOver) {
      // we are outside boundry of the editor
      return "outside boundry of the editor";
    }
    if (componentOver.elementBase.className === 'div') {
      containerOver = componentOver;
      parentContainer = this.editorService.getParentContainer(componentOver);
    }
    if (componentOver.elementBase.className !== 'div' && componentOver.elementBase.className !== 'ContainerComponent') {
      containerOver = this.editorService.getParentContainer(componentOver);
      parentContainer = this.editorService.getParentContainer(containerOver);
    }

    if (!parentContainer) {
      //return "The over element does not support drop of other components. Drag over containers"; // TODO containers should be in some var with others..
    }

    const borderDistance = this.borderDistance(containerOver, d.cdkDragMove);
    console.log(borderDistance);

    if (
      containerOver.elementBase.cssClass.find(css => css.className == 'flex-row') || 
      (containerOver.elementBase.cssClass.find(css => css.className == 'flex') && !containerOver.elementBase.cssClass.find(css => css.className === 'flex-col'))
    ) {
      
      if (containerOver.children.length > 0) {
        containerOver.children.forEach(child => {
          if (child.elementBase.id === d.component.elementBase.id) {
            return; // we want to skip any logic on the same element that is being dragged
          }
          const startDistance = Math.abs(child.elementBase.domRect.x - d.cdkDragMove.pointerPosition.x);
          const endDistance = Math.abs(child.elementBase.domRect.x + child.elementBase.domRect.width - d.cdkDragMove.pointerPosition.x);
          if (startDistance < smallestDistance) {
            bestComponentFit = child;
            smallestDistance = startDistance;
            position = 'before';
          }
          if (endDistance < smallestDistance) {
            bestComponentFit = child;
            smallestDistance = endDistance;
            position = 'after';
          }
        })
        if (position === 'before') {
          this.dragElementCssStyles = this.fwefewfew('flex-row',position,bestComponentFit);
        }
        if (position === 'after') {
          this.dragElementCssStyles = this.fwefewfew('flex-row',position,bestComponentFit);
        }
      } else {
        this.dragElementCssStyles = this.fwefewfew('flex-row','middle',containerOver);
        const p: {x: number, y: number} = {x: containerOver.elementBase.domRect.x + containerOver.elementBase.domRect.width / 2, y: containerOver.elementBase.domRect.y + containerOver.elementBase.domRect.height / 2}
        smallestDistance = this.distancePoints(p,d.cdkDragMove.pointerPosition);
        bestComponentFit = containerOver;
        position = 'in';
      }
    }
    if (containerOver.elementBase.cssClass.find(css => css.className == 'flex-col')) {
      if (containerOver.children.length > 0) {
        containerOver.children.forEach(child => {
          if (child.elementBase.id === d.component.elementBase.id) {
            return; // we want to skip any logic on the same element that is being dragged
          }
          const startDistance = this.distancePoints({x: child.elementBase.domRect.x + child.elementBase.domRect.width / 2, y: child.elementBase.domRect.y},d.cdkDragMove.pointerPosition);
          const endDistance = this.distancePoints({x: child.elementBase.domRect.x + child.elementBase.domRect.width / 2, y: child.elementBase.domRect.y + child.elementBase.domRect.height},d.cdkDragMove.pointerPosition);
          if (startDistance < smallestDistance) {
            bestComponentFit = child;
            smallestDistance = startDistance;
            position = 'before';
          }
          if (endDistance < smallestDistance) {
            bestComponentFit = child;
            smallestDistance = endDistance;
            position = 'after';
          }
        })
        if (position === 'before') {
          this.dragElementCssStyles = this.fwefewfew('flex-col',position,bestComponentFit);
        }
        if (position === 'after') {
          this.dragElementCssStyles = this.fwefewfew('flex-col',position,bestComponentFit);
        }
      } else {
        this.dragElementCssStyles = this.fwefewfew('flex-col','middle',containerOver);
        const p: {x: number, y: number} = {x: containerOver.elementBase.domRect.x + containerOver.elementBase.domRect.width / 2, y: containerOver.elementBase.domRect.y + containerOver.elementBase.domRect.height / 2}
        smallestDistance = this.distancePoints(p,d.cdkDragMove.pointerPosition);
        bestComponentFit = containerOver;
        position = 'in';
      }
    }
    console.log("smallestDistance: ", smallestDistance);
    if (parentContainer) {
      if (
        parentContainer.elementBase.cssClass.find(css => css.className == 'flex-row') || 
        (parentContainer.elementBase.cssClass.find(css => css.className == 'flex') && !parentContainer.elementBase.cssClass.find(css => css.className === 'flex-col'))
      ) {
        if (!bestComponentFit) {
          bestComponentFit = containerOver;
        }
        const middlePoint = (bestComponentFit.elementBase.domRect.x + bestComponentFit.elementBase.domRect.width / 2) - containerOver.elementBase.domRect.x;
        if (borderDistance.distanceFromStartX < middlePoint && borderDistance.distanceFromStartX < smallestDistance) { 
          bestComponentFit = containerOver;
          this.dragElementCssStyles = this.fwefewfew('flex-row','before',containerOver);
          position = 'before';
        }
        if (borderDistance.distanceFromEndX < middlePoint && borderDistance.distanceFromEndX < smallestDistance) { 
          bestComponentFit = containerOver;
          this.dragElementCssStyles = this.fwefewfew('flex-row','after',containerOver);
          position = 'after';
        }
      }
      if (parentContainer.elementBase.cssClass.find(css => css.className == 'flex-col')) {
        if (!bestComponentFit) {
          bestComponentFit = containerOver;
        }
        const middlePoint = (bestComponentFit.elementBase.domRect.y + bestComponentFit.elementBase.domRect.height / 2) - containerOver.elementBase.domRect.y;
        console.log(bestComponentFit);
        console.log(middlePoint);
        console.log(borderDistance);
        let distanceCheck;
        if (bestComponentFit.elementBase.domRect.height * this.ratioMoveToNext < this.ratioMoveToNextAbsoluteMin) {
          distanceCheck = this.ratioMoveToNextAbsoluteMin;
        }
        if (bestComponentFit.elementBase.domRect.height * this.ratioMoveToNext > this.ratioMoveToNextAbsoluteMax) {
          distanceCheck = this.ratioMoveToNextAbsoluteMax;
        } else {
          distanceCheck = containerOver.elementBase.domRect.height * this.ratioMoveToNext;
        }
        console.log("distanceCheck: ",distanceCheck);
        if (borderDistance.distanceFromStartY < middlePoint && borderDistance.distanceFromStartY < distanceCheck) { 
          this.dragElementCssStyles = this.fwefewfew('flex-col','before',bestComponentFit);
          position = 'before';
          //bestComponentFit = containerOver;
        }
        if (borderDistance.distanceFromEndY < middlePoint && borderDistance.distanceFromEndY < distanceCheck) { 
          this.dragElementCssStyles = this.fwefewfew('flex-col','after',bestComponentFit);
          position = 'after';
          //bestComponentFit = containerOver;
        }
      }
    }
    
    this.componentDropping = {
      component: d.component,
      position: position,
      target: bestComponentFit
    };
    this.dragElementChangeCss(this.dragElementCssStyles);
    this.appendHelperDragElement(bestComponentFit.elementBase.id);
  }

  borderDistance(container: WebBlocksComponent, cdkDragMove: CdkDragMove) {
    const distanceFromStartY: number = Math.ceil((cdkDragMove.event as MouseEvent).clientY - container.elementBase.domRect.y);
    const distanceFromEndY: number = Math.ceil((container.elementBase.domRect.y + container.elementBase.domRect.height) - (cdkDragMove.event as MouseEvent).clientY);
    const distanceFromStartX: number = Math.ceil((cdkDragMove.event as MouseEvent).clientX - container.elementBase.domRect.x);
    const distanceFromEndX: number = Math.ceil((container.elementBase.domRect.x + container.elementBase.domRect.width) - (cdkDragMove.event as MouseEvent).clientX);
    return {distanceFromStartX,distanceFromEndX,distanceFromStartY,distanceFromEndY}
  }

  fwefewfew(flexDirection: 'flex-col' | 'flex-row', position: 'before' | 'after' | 'middle', component: WebBlocksComponent): IDragElementCssStyles {
    let dragElementCssStyles: IDragElementCssStyles = {width: '',height: '',top: '',left: '',transform: ''};
    if (flexDirection === 'flex-col' && position === 'before') {
      dragElementCssStyles.width = component.elementBase.domRect.width + 'px';
      dragElementCssStyles.height = '2px';
      dragElementCssStyles.top = '0px';
      dragElementCssStyles.left = '0px';
      dragElementCssStyles.transform = 'none';
    }
    if (flexDirection === 'flex-col' && position === 'after') {
      dragElementCssStyles.width = component.elementBase.domRect.width + 'px';
      dragElementCssStyles.height = '2px';
      dragElementCssStyles.top = '100%';
      dragElementCssStyles.left = 0 + 'px';
      dragElementCssStyles.transform = 'none';
    }
    if (flexDirection === 'flex-row' && position === 'before') {
      dragElementCssStyles.width = '2px';
      dragElementCssStyles.height = component.elementBase.domRect.height + 'px';
      dragElementCssStyles.top = '0px';
      dragElementCssStyles.left = '0px';
      dragElementCssStyles.transform = 'none';
    }
    if (flexDirection === 'flex-row' && position === 'after') {
      dragElementCssStyles.width = '2px';
      dragElementCssStyles.height = component.elementBase.domRect.height + 'px';
      dragElementCssStyles.top = '0px';
      dragElementCssStyles.left = '100%';
      dragElementCssStyles.transform = 'none';
    }
    if (position === 'middle') {
      dragElementCssStyles.width = '8px';
      dragElementCssStyles.height = '8px';
      dragElementCssStyles.top = '50%';
      dragElementCssStyles.left = '50%';
      dragElementCssStyles.transform = 'translate(-50%,-50%)';
    }
    return dragElementCssStyles
  }

  dragElementMoveMiddle(container: WebBlocksComponent): boolean {
    if (container.children.length === 0) {
      this.dragElementCssStyles.width = '8px';
      this.dragElementCssStyles.height = '8px';
      this.dragElementCssStyles.top = '50%';
      this.dragElementCssStyles.left = '50%';
      this.dragElementCssStyles.transform = 'translate(-50%,-50%)';
      return true
    }
    return false
  }

  dragElementChangeCss(styles: IDragElementCssStyles = this.dragElementCssStyles) {
    this.dragHelper.nativeElement.style.width = styles.width;
    this.dragHelper.nativeElement.style.height = styles.height;
    this.dragHelper.nativeElement.style.top = styles.top;
    this.dragHelper.nativeElement.style.left = styles.left;
    this.dragHelper.nativeElement.style.transform = styles.transform;
  }

  appendHelperDragElement(id: number) {
    const draggedOverElement: any = document.getElementById(id.toString());
    this.renderer.appendChild(draggedOverElement, this.dragHelper.nativeElement);
  }

  distancePoints(p1, p2): number {
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;
    const c = Math.sqrt( a*a + b*b );
    return c;
  }

  xx(cursorLocation: IPointCoordinate,component: WebBlocksComponent, draggedId: number, currentBestResult?: WebBlocksComponent) {
    currentBestResult = this.findBestFitDrop(cursorLocation,component,draggedId,currentBestResult);
    if (component.children?.length > 0) {
      component.children.forEach((child: WebBlocksComponent) => {
        if (child.elementBase.id === draggedId) {
          return;
        }
        currentBestResult = this.xx(cursorLocation,child,draggedId,currentBestResult);
      })
    }
    return currentBestResult
  }

  findBestFitDrop(cursorLocation: IPointCoordinate,component: WebBlocksComponent, draggedId: number, currentBestResult?: ElementBase): ElementBase {
    const withingX = cursorLocation.x > component.elementBase.domRect.x && cursorLocation.x < component.elementBase.domRect.x + component.elementBase.domRect.width;
    const withingY = cursorLocation.y > component.elementBase.domRect.y && cursorLocation.y < component.elementBase.domRect.y + component.elementBase.domRect.height;
    const sameComponent: boolean =  component.elementBase.id === draggedId;
    if (withingX && withingY && !sameComponent) {
      currentBestResult = component;
    }
    return currentBestResult
  }
}
