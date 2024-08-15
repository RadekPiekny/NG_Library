import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { IMonth, monthList } from './ngx-calendar.model';
import { slideFromLeft } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { dateConvert } from '@rp_custom_library/appkit-styled-lib/src/lib/function';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './ngx-calendar.component.html',
  styleUrls: ['./ngx-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromLeft]
})
export class NgxCalendarComponent implements OnInit {
  ngOnInit(): void {
    if (!this._month) {
      this._month = new Date().getMonth() + 1;
    }
    if (!this._year) {
      this._year = new Date().getFullYear();
    }
  }
  showChangeSelection = false;
  _year: number = new Date().getFullYear();
  _day: number = 1;
  _disableFrom: Date;
  @Input() set disableFrom(v: Date | string) {
    if(typeof(v) === 'string') {
      if(isNaN(new Date(v).getDay())) {
        console.error('Invalid date format. Please enter a date in "MM/dd/yyyy" or "YYYY/dd/mm" format')
      }
      else {
        this._disableFrom = new Date(v)
      }
    }
    else {
      this._disableFrom = v;
    }
  };
  _disableTo: Date;
  @Input() set disableTo(v: Date | string) {
    if(typeof(v) === 'string') {
      if(isNaN(new Date(v).getDay())) {
        console.error('Invalid date format. Please enter a date in "MM/dd/yyyy" or "YYYY/dd/mm" format')
      }
      else {
        this._disableTo = new Date(v)
      }
    }
    else {
      this._disableTo = v;
    }
  };
  _disableRange: Date[];
  @Input() set disableRange(v: Date[]) {
    this._disableRange = v;
  };
  @Output() dateChange: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  _selectedDate: Date[] = [];
  @Input() set selectedDate(v: Date | string) {
    let resultDate = dateConvert(v);
    if (!resultDate) {
      return;
    }
    if (this._year === resultDate.getFullYear() && this._month === resultDate.getMonth() +1 && this._day === resultDate.getDate()) {
      //same input as current
      return;
    }
    this._year = resultDate.getFullYear();
    this._month = resultDate.getMonth() + 1;
    this._day = resultDate.getDate();
    this._selectedDate.push(resultDate);
  }
  @Input() width = 300;
  @Input() set year(v: number) {
    this._year = v;
  }
  _month: number;
  @Input() set month(v: number) {
    if(!v) { 
      console.warn('There was an null/undefined to month "NgxCalendarComponent" ')
      return
    }
    this._month = v; //THis is changed
  }
  @Input() size: 's' | 'xs' | 'l' | 'm' = 'm';
  yearSelectionShow = false;
  monthSelectionShow = false;

  monthList: IMonth[] = monthList;

  monthChange(month: number) {
    this._month = month;
  }

  yearChange(year: number) {
    this._year = year;
  }

  previous() {
    if (this._month === 1) {
      this._year = this._year - 1;
      this._month = 12;
    } else {
      this._month = this._month - 1;
    }
  }

  next() {
    if (this._month === 12) {
      this._year = this._year + 1;
      this._month = 1;
    } else {
      this._month = this._month + 1;
    }
  }

  perChange(v: {year: number, month: number}) {
    this._month = v.month;
    this._year = v.year;
    this.showChangeSelection = false;
  }
}
