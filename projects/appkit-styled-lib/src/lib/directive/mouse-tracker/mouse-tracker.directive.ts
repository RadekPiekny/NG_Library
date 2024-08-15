import { Directive, ElementRef, HostListener, Output, Renderer2, EventEmitter } from '@angular/core';
import { MouseTrackerMouseMove, MouseTrackerMouseStart } from './mouse-tracker.model';

@Directive({
  selector: '[ngxMouseTracker]'
})
export class MouseTrackerDirective {

  private isMouseDown = false;
  @Output() ngxMouseMove = new EventEmitter<MouseTrackerMouseMove>();

  @Output() mouseDownTrigger = new EventEmitter<MouseTrackerMouseStart>();
  @Output() mouseMoveStart = new EventEmitter<void>();
  @Output() mouseMoveEnd = new EventEmitter<null>();

  constructor(
    private host: ElementRef
  ) { }

  elDOMRect: DOMRect | undefined;
  initialMouseDown: MouseEvent | undefined;
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {


    // Get the element's position relative to the window
    const rect = this.host.nativeElement.getBoundingClientRect();

    this.isMouseDown = true;
    this.elDOMRect = this.host.nativeElement.getBoundingClientRect();
    this.initialMouseDown = event;
    this.mouseDownTrigger.emit({
      host: this.host,
      event: event,
      xPositionHostClick: event.clientX - rect.left // + 1 //chatGPT told me the px position is actually zero based so we want to add 1
    });
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.isMouseDown) {
      this.trackMouseMovement(event);
    }
  }

  @HostListener('document:mouseup') onMouseUp() {
    this.isMouseDown = false;
    this.mouseMoveEnd.emit(null);
  }

  private trackMouseMovement(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    this.ngxMouseMove.emit({
      event,
      host: this.elDOMRect,
      initialMouseDown: this.initialMouseDown
    });
  }

}
