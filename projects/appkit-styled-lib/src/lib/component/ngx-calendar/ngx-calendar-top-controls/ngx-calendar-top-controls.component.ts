import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMonth, IMonthChange, monthList } from '../ngx-calendar.model';

@Component({
  selector: 'ngx-calendar-top-controls',
  templateUrl: './ngx-calendar-top-controls.component.html',
  styleUrls: ['./ngx-calendar-top-controls.component.css']
})
export class NgxCalendarTopControlsComponent {
  @Input() year: number = new Date().getFullYear();
  @Input() month: number = new Date().getMonth();
  @Output() monthChange: EventEmitter<IMonthChange> =
    new EventEmitter<IMonthChange>();
  monthList: IMonth[] = monthList;
}
