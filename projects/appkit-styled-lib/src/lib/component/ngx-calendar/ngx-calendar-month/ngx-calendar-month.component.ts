import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  generateCurrentMonthDays,
  generateDays,
  generateNextMonthDays,
  generatePreviousMonthDays,
  getNextDay,
  isDateHigherOrEqual,
  isDateInArray,
  isDateLowerOrEqual
} from '../functions/calendar-functions';
import { IDay, weekDay } from '../ngx-calendar.model';

@Component({
  selector: 'ngx-calendar-month',
  templateUrl: './ngx-calendar-month.component.html',
  styleUrls: ['./ngx-calendar-month.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCalendarMonthComponent implements OnInit, OnChanges {
  weekDay: IDay[] = weekDay;
  currentDays: {
    date: Date,
    disabled: boolean
  }[] = [];
  previousDays: Date[] = [];
  nextDays: Date[] = [];

  _disableFrom: Date;
  @Input() set disableFrom(v: Date) {
    this._disableFrom = v;
    this.generateCalendar();
  };
  _disableTo: Date;
  @Input() set disableTo(v: Date) {
    this._disableTo = v;
    this.generateCalendar();
  };
  _disableRange: Date[];
  @Input() set disableRange(v: Date[]) {
    this._disableRange = v;
    this.generateCalendar();
  };
  @Input() year: number = new Date().getFullYear();
  @Input() month: number = new Date().getMonth();
  _selection: Date[] = [];
  @Input() selection: Date[] = [];
  @Input() selectType: 'single' | 'multi' = 'single';
  @Input() size: 's' | 'xs' | 'l' | 'm' = 'm';
  @Output() dateChange: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  bellow30 = false;

  ngOnChanges(changes: SimpleChanges) {
    this.generateCalendar();
  }

  ngOnInit(): void {
    this.selection.forEach((d) => {
      this.activateDay(d, false);
    });
    console.log("ngOnInit ngx-calendar-month");
  }

  generateCalendar() {
    if (isNaN(this.year)) {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth();
    }
    const thisMonthDate: Date = new Date(this.year, this.month - 1, 1);
    const current = generateCurrentMonthDays(thisMonthDate);
    this.currentDays = current.map(d => {
      return {
        date: d,
        disabled: false
      }
    })
    this.currentDays.map(d => {
      if (this._disableFrom && this._disableTo) {
        if (isDateHigherOrEqual(d.date, this._disableFrom) && isDateLowerOrEqual(d.date, this._disableTo)) {
          d.disabled = true;
        }
      } else {
        if (this._disableFrom) {
          if (isDateHigherOrEqual(d.date, this._disableFrom)) {
            d.disabled = true;
          }
        }
        if (this._disableTo) {
          if (isDateLowerOrEqual(d.date, this._disableTo)) {
            d.disabled = true;
          }
        }
      }
      if (this._disableRange) {
        if (isDateInArray(d.date,this._disableRange)) {
          d.disabled = true;
        }
      }
    })
    this.previousDays = generatePreviousMonthDays(thisMonthDate);
    this.nextDays = generateNextMonthDays(thisMonthDate);
    if (
      this.currentDays.length +
        this.previousDays?.length +
        this.nextDays?.length <=
      35
    ) {
      this.bellow30 = true;
    }
    if (this.currentDays.length + this.previousDays.length + this.nextDays.length <= 35) {
      const lastNextDay = this.nextDays[this.nextDays.length - 1];
      const nextDay = getNextDay(lastNextDay,1);
      const lastDay = getNextDay(lastNextDay,7);
      const arr = generateDays(nextDay,lastDay);
      this.nextDays.push(...arr);
    }
  }

  activateDay(day: Date, emit = true) {
    
    if (this.selectType === 'single') {
      this.activateDaySingle(day,emit);
    } else {
      const index: number = this._selection.findIndex(
        (d) => d.toJSON() === day.toJSON()
      );
      if (index > -1) {
        this._selection.splice(index, 1);
      } else {
        this._selection.push(day);
      }
    }
  }

  activateDaySingle(day: Date, emit = true) {
    this._selection = [];
    this._selection.push(day);
    if (emit) {
      this.dateChange.emit(this._selection);
    }
  }

  activeDayCheck(day: Date): boolean {
    const active: boolean = this._selection.some((d) => {
      return (
        d.getFullYear() === day.getFullYear() &&
        d.getMonth() === day.getMonth() &&
        d.getDate() === day.getDate()
      );
    });
    return active;
  }

  currentDateCheck(day: Date): boolean {
    const date: Date = new Date();
    return (
      date.getFullYear() === day.getFullYear() &&
      date.getMonth() === day.getMonth() &&
      date.getDate() === day.getDate()
    );
  }

}
