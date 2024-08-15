import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContentComponent {
  @Output() showModalChange = new EventEmitter<boolean>();
}
