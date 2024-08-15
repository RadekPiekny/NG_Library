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
  selector: 'overlay-select',
  templateUrl: './overlay-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromTop, modal]
})
export class OverlaySelectComponent implements OnInit {
  ngOnInit(): void {
    console.log('selected data for overlay:', this.selectedData);
  }
  @Input() data: any[] = [];
  @Input() selectedData: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
}
