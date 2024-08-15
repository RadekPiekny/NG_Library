import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class NgxDropZoneDirective {
  @HostBinding('class.fileover') fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();

  @HostListener('dragenter', ['$event']) public onDragEnter(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('dragstart', ['$event']) public onDragStart(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('dragend', ['$event']) public onDragEnd(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }
  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }
  @HostListener('drag', ['$event']) public onDrag(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('drop', ['$event']) public ondrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    if (evt.dataTransfer) {      
      const files: any = evt.dataTransfer.files;
      if (files.length > 0) {
        this.fileDropped.emit([...files]);
      }
    }
  }
}
