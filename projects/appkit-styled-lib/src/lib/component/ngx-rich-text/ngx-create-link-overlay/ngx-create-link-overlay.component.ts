import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { modal, slideFromTop } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';

@Component({
  selector: 'ngx-create-link-overlay',
  templateUrl: './ngx-create-link-overlay.component.html',
  styleUrls: ['./ngx-create-link-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromTop, modal]
})
export class NgxCreateLinkOverlayComponent {
  @Input() data: any[] = [];
  @Input() selectedData: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  change(event: any) {
    const val = (event.target as HTMLInputElement).value
    this.valueChange.emit(val)
  }
}
