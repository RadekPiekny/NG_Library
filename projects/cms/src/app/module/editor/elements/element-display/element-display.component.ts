import { transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { slideFromBottomEnter } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { ElementBase } from 'projects/cms/src/app/services/api/models';

@Component({
  selector: 'element-display',
  templateUrl: './element-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('componentEnter', [
      transition(':enter', slideFromBottomEnter),
    ])
  ]
})
export class ElementDisplayComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
  }

  _data: ElementBase;
  @Input() set data(v: ElementBase) {
    console.log("new data");
    this._data = v;
  };
}
