import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'not-exist',
  templateUrl: './not-exist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotExistComponent {

  @Output() createNew: EventEmitter<void> = new EventEmitter<void>();
  create() {
    this.createNew.emit();
  }
}
