import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementBase } from 'projects/cms/src/app/services/api/models';

@Component({
  selector: 'element-edit-base',
  template: ``,
})
export class ElementEditOverlayBaseComponent {
  @Input() form: any;
  @Output() elementBaseChange: EventEmitter<ElementBase> = new EventEmitter<ElementBase>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
}
