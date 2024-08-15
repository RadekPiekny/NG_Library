import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-calendar-new-selection',
  templateUrl: './ngx-calendar-new-selection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCalendarNewSelectionComponent {
  @Input() set year(v: number) {
    this._year = v;
  };
  @Input() set month(v: number) {
    this._month = v;
  };
  @Output() valueChange = new EventEmitter<{year: number, month: number}>();
  _month: number;
  _year: number;


  monthChange(month: number) {
    this._month = month;
  }

  yearChange(year: number) {
    this._year = year;
  }

  confirm() {
    this.valueChange.emit({year: this._year, month: this._month})
  }

}
