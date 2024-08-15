import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { modal, slideFromTop } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';

@Component({
  selector: 'ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromTop, modal]
})
export class NgxModalComponent {
  @Input() open = false;
  @Input() focus = true;
  @Input() autoClose = true;
  @Output() closeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleClose(): void {
    if (!this.autoClose) {
      return;
    }
    this.open = false;
    this.closeChange.emit();
  }

  clickModal(e: Event) {
    e.stopPropagation();
  }
}
