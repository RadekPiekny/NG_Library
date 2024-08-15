import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxTextSelectionService } from '@rp_custom_library/appkit-styled-lib/src/lib/service/text-selection';
import { ElementBase, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { EditorService } from '../service/editor.service';

@Directive({
  selector: '[wrapperEvents]'
})
export class WrapperEventsDirective {

  constructor(
    private editorService: EditorService,
    private textSelectionService: NgxTextSelectionService
  ) { }

  @Input() data: WebBlocksComponent;
  @Output() mouseState: EventEmitter<'mouseenter' | 'mouseleave' | 'mousemove'> = new EventEmitter<'mouseenter' | 'mouseleave' | 'mousemove'>();

  @HostListener('click', ['$event']) handleClick(e: PointerEvent) {
    this.textSelectionService.lastClickEvent = e;
    e.stopPropagation();
    e.preventDefault();
    this.toggleActivate();
  }

  @HostListener('mouseover', ['$event']) mouseEnter(e: Event) {
    this.editorService.componentMoveId$.next(this.data.elementBase.id);
    e.stopPropagation();
  }


  @HostListener('mouseleave', ['$event']) mouseLeave(e: Event) {

  }

  @HostListener('mousemove', ['$event']) mouseMove(e: Event) {

    
  }

  @HostListener('mouseup', ['$event']) mouseUp(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  toggleActivate() {
    this.editorService.activateWebBlocksComponent(this.data);
  }

}
