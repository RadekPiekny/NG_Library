import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { InputDateAutoDateValidation } from '@rp_custom_library/appkit-styled-lib/src/lib/component/input-auto-date';
import { slideFromBottom } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { FormFieldBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base';
import { dateConvert } from '@rp_custom_library/appkit-styled-lib/src/lib/function';

@Component({
  selector: 'ngx-input-date',
  templateUrl: './ngx-input-date.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputDateComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromBottom]
})
export class NgxInputDateComponent extends FormFieldBaseComponent<Date | string> {


  @Input() dateFormat: string = 'YYYY/MM/dd';
  @Input() reset: boolean = false;
  @Input() type: 'date' | 'datetime' | 'datetime-local' = 'date';
  @Input() timeType: '12h' | '24h' = '24h';
  _min: Date;
  @Input() set min(v: Date | string) {
    let result: Date = dateConvert(v);
    this._min = result;
  };
  _max: Date;
  @Input() set max(v: Date | string) {
    let result: Date = dateConvert(v);
    this._max = result;
  };

  _disableFrom: Date;
  @Input() set disableFrom(v: Date | string) {
    let result: Date = dateConvert(v);
    this._disableFrom = result;
  };
  _disableTo: Date;
  @Input() set disableTo(v: Date | string) {
    let result: Date = dateConvert(v);
    this._disableTo = result;
  };
  _disableRange: Date[];
  @Input() set disableRange(v: Date[] | string[]) {
    if (v) {      
      let result: Date[] = v.map(d => {
        return dateConvert(d)
      });
      this._disableRange = result;
    }
  };
  @Input() closeCalendarAfterPick = true;
  @Input() showInternalErrors:boolean = true;
  @Output() dateValidation = new EventEmitter<InputDateAutoDateValidation[]>();

  autoFCvalidation!: InputDateAutoDateValidation[];
  errMsg!: string;
  autoFC = new FormControl();
  showCalendar: boolean = false;
  btnClick() {
    this.showCalendar = true;
  }

  selectBlur(e: Event) {
    if (this.showCalendar) {
      return;
    } else {
      this.onBlur(e);
    }
  }

  closeOptions() {
    this.focused.next(false);
    if (this.onTouched) {
      this.onTouched();
    }
    this.showCalendar = false;
  }

  dateChange(date: Date[]) {
    setTimeout(() => {
      this.fc.patchValue(date[0]);
      this.autoFCvalidation = [];
      this.errMsg = '';
      if (this.closeCalendarAfterPick) {
        this.showCalendar = false;
      }
    });
  }

  autoDateChange(date: Date) {
    this.fc.patchValue(date, { emitEvent: false });
    this.autoFCvalidation = [];
    this.errMsg = '';
  }

  resetMe(e: Event) {
    e.stopPropagation();
    this.fc.reset();
  }

  autoDateValidation(e: InputDateAutoDateValidation[]) {
    this.autoFCvalidation = e;
    this.dateValidation.emit(e);
    this.errMsg = this.autoFCvalidation.map(av => av.err.join('. ')).filter(v => v).join('. ');
  }
}
