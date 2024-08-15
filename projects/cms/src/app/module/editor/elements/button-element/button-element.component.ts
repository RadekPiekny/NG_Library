import { transition, trigger } from '@angular/animations';
import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { slideFromBottomEnter } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { ElementBase } from 'projects/cms/src/app/services/api/models';
import { EditorDraggingService } from '../../service/editor-dragging.service';
import { EditorService } from '../../service/editor.service';

@Component({
  selector: 'button-element',
  templateUrl: './button-element.component.html',
  animations: [
    trigger('dataEnter', [
      transition(':enter', slideFromBottomEnter),
    ])
  ]
})
export class ButtonElementComponent {

  constructor(
    public host: ElementRef,
    private renderer: Renderer2,
    private editorService: EditorService,
    private editorDraggingService: EditorDraggingService
  ){}

  @Input() data: ElementBase;
  @Input() ac: any;

  @ViewChild('cdkDrag') cdkDrag: any;
  dragReset() {
    this.cdkDrag._dragRef['_previewRect'] = undefined;
    this.cdkDrag._dragRef['_boundaryRect'] = undefined;
  }

  dragStart(e: CdkDragStart, component: ElementBase) {
    console.log("Angular cdk drag start");
    this.editorDraggingService.dragStart$.next(component);
    this.renderer.addClass(e.source.element.nativeElement,'pointer-events-none');
    this.renderer.addClass(e.source.element.nativeElement,'md-elevation-16dp');
    this.renderer.addClass(e.source.element.nativeElement,'z-index-max');
    this.renderer.addClass(e.source.element.nativeElement,'opacity-20');
    
  }

  dragEnd(e: CdkDragEnd) {
    console.log(e);
    this.renderer.removeClass(e.source.element.nativeElement,'pointer-events-none');
    this.editorDraggingService.dragEnd$.next(e);
  }

  dragMove(e: CdkDragMove) {
    this.editorDraggingService.dragMove$.next(e);
  }
}
