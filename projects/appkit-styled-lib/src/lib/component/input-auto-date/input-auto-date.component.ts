import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChildren, forwardRef } from '@angular/core';
import { findDateSeparator, findIndexOfFirstDifferentChar, getSt, getType, getWidth, validateDay, validateMonth, validateYear, compareDates } from './input-auto-date.function';
import { InputDateAutoDateValidation, InputDateAutoDateValidationVal, InputDateAutoPeriods } from './input-auto-date.model';
import { cloneDeep } from 'lodash';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'input-auto-date',
  templateUrl: './input-auto-date.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAutoDateComponent),
      multi: true
    }
  ],
})
export class InputAutoDateComponent extends FormControlBaseComponent<Date> implements OnInit, OnChanges, OnDestroy {

  constructor(
    private cdr: ChangeDetectorRef
  ){
    super();
  }
  ngOnDestroy(): void {
    this.s?.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.format) {
      this.init();
    }
  }

  @ViewChildren('inputs') inputs: QueryList<ElementRef>;
  innerChanges: boolean = true;
  s: Subscription = new Subscription;
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.s?.unsubscribe();
    this.formattedDate = this.format;
    this.separator = findDateSeparator(this.format);
    this.dateReset();
    this.s = this.fc.valueChanges.subscribe(v => {
      if (v) {
        this.dateInit(v);
        this.originalDate = cloneDeep(v);
        this.currentDate = v;
      } else {
        this.dateReset();
      }
    })
  }

  private year: string = "YYYY";
  private month: string = "MM";
  private day: string = "DD";
  originalDate: Date;
  currentDate: Date;
  ugh: string[] = [];
  @Input() format = `${this.year}/${this.month}/${this.day}`;
  @Output() dateChange = new EventEmitter<Date>();
  _dateValidation: InputDateAutoDateValidation[] = [];
  @Output() dateValidation = new EventEmitter<InputDateAutoDateValidation[]>();
  @Input() set date(v: Date) {
    this.dateInit(v);
    this.originalDate = cloneDeep(v);
    this.currentDate = v;
  }

  dateInit(v: Date | string) {
    let date;
    if (typeof v === 'string') {
      date = new Date(v);
    } else {
      date = v;
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    

    const m = (month + 1) < 10 ? `0${month + 1}` : `${month + 1}`;
    const d = day  < 10 ? `0${day}` : `${day}`;

    this.year = year.toString();
    this.month = m;
    this.day = d;
    const x = {
      year: this.year,
      month: this.month,
      day: this.day
    }
    this.separator = findDateSeparator(this.format);

    if (this.separator) {
      
      this.firstPeriodInit = getSt(this.format,0,x,0);
      this.middlePeriodInit = getSt(this.format,findIndexOfFirstDifferentChar(this.format,this.separator),x,1);
      this.lastPeriodInit = getSt(this.format,this.format.length - 1,x,2);
  
      this.periods$.next([
        cloneDeep(this.firstPeriodInit),
        cloneDeep(this.middlePeriodInit),
        cloneDeep(this.lastPeriodInit)
      ])
  
      const position: InputDateAutoDateValidationVal[] = [this.firstPeriodInit,this.middlePeriodInit,this.lastPeriodInit];
      this.formattedDate = `${position[0].value}${this.separator}${position[1].value}${this.separator}${position[2].value}`;
    } else {
      console.warn("Separator for input-auto-date was not found!");
    }
  }

  dateReset() {
    if (this.separator) {
      const justFormatNoDate = this.format.split(this.separator).map((v,i) => {
        const type = getType(v);
        const x: InputDateAutoDateValidationVal = {
          canContinue: true,
          err: [],
          index: i,
          symbols: v.length,
          type,
          valid: false,
          value: v.toUpperCase(),
          width: getWidth(type,v.length,true)
        }
        return x
      });
      this.periods$.next(justFormatNoDate);
    }
  }

  periods$ = new BehaviorSubject<InputDateAutoDateValidationVal[]>([]);

  firstPeriodInit!: InputDateAutoDateValidationVal;
  middlePeriodInit!: InputDateAutoDateValidationVal;
  lastPeriodInit!: InputDateAutoDateValidationVal;

  firstPeriod!: InputDateAutoDateValidationVal;
  middlePeriod!: InputDateAutoDateValidationVal;
  lastPeriod!: InputDateAutoDateValidationVal;

  formattedDate: string = '';
  separator: string | null = null;

  periodChange(val: string, index: number, emit = true) {
    //const vval = this.addZero(val.toString(),this.periods$.getValue()[index].type);
    this.periods$.getValue()[index].value = val.toString();
    if (emit && this.dateValid()) {
      this.onChange(this.currentDate);
      this.dateChange.emit(this.currentDate);
    }
    if (!this.innerChanges) {
      this.dateValidation.emit(this._dateValidation);
    }
  }

  getValFromInput(event: Event, index: number): number {
    const inputElement = event.target as HTMLInputElement;
    if (isNaN(parseInt(inputElement.value))) {
      let value = inputElement.value.replace(/\D/g, '');
      inputElement.value = value;
    }
    let valueNum = parseInt(inputElement.value);
    /*if (inputElement.value[0] === '0') {
      return 
    }*/
    return valueNum
  }

  runValidtion() {
    const yearPeriod = this.periods$.getValue().find(p => p.type === InputDateAutoPeriods.YEAR)?.value;
    const monthPeriod = this.periods$.getValue().find(p => p.type === InputDateAutoPeriods.MONTH)?.value;
    const dayPeriod = this.periods$.getValue().find(p => p.type === InputDateAutoPeriods.DAY)?.value;
    let year = -1;
    let month = -1;
    let day = -1;
    if (yearPeriod) {
      year = parseInt(yearPeriod);
    }
    if (monthPeriod) {
      month = parseInt(monthPeriod);
    }
    if (dayPeriod) {
      day = parseInt(dayPeriod);
    }

    if (year === -1) {
      console.warn("There is not valid date year")
      return;
    }
    if (month === -1) {
      console.warn("There is not valid date month")
      return;
    }
    if (day === -1) {
      console.warn("There is not valid date day")
      return;
    }

    const validDay = validateDay(dayPeriod,month,year);
    const validMonth = validateMonth(monthPeriod);
    const validYear = validateYear(year);
    this._dateValidation = [validYear,validMonth,validDay];

    this.periods$.getValue().forEach((p,i) => {
      p.valid = this._dateValidation[i].valid;
      p.canContinue = this._dateValidation[i].canContinue;
    })
    if (this.dateValid()) {
      this.currentDate = new Date(year,month-1,day);
    }
  }

  dateValid() {
    return this.periods$.getValue().map(p => p.valid).every(v => v)
  }

  blurOutside(): boolean {
    const anyFocuces = this.inputs.some(i => {
      const activeElement = document.activeElement;
      const focused = i.nativeElement === activeElement;
      return focused
    })
    return !anyFocuces
  }

  onDateBlur(index: number,event: Event) {
    setTimeout(() => {
      
      if (compareDates(this.originalDate,this.currentDate)) {
        return;
      }

      const inputElement = event.target as HTMLInputElement;
      if (inputElement.value === "YYYY" || inputElement.value === "MM" || inputElement.value === "DD") {
        return;
      }
      const previousDate = this.currentDate;
      this.runValidtion();
      if (!compareDates(this.currentDate,previousDate)) {
        const inputElement = event.target as HTMLInputElement;
        this.periodChange(inputElement.value,index);
      }
      if (this.blurOutside()) {
        const duplicatePeriods = cloneDeep(this.periods$.getValue())
        this.dateChange.emit(this.currentDate);
        this.onChange(this.currentDate);
        this.addZeros();
        this.updateWidths(duplicatePeriods);
      }
    });
  }

  addZeros() {
    const duplicatePeriods = cloneDeep(this.periods$.getValue())
    for (let index = 0; index < duplicatePeriods.length; index++) {
      const newVal = this.addZero(duplicatePeriods[index].value, duplicatePeriods[index].type);
      duplicatePeriods[index].value = newVal;
    }
    setTimeout(() => {      
      this.periods$.next(duplicatePeriods);
    });
  }

  addZero(value: string, periodType: InputDateAutoPeriods): string {
    if (periodType === InputDateAutoPeriods.DAY || periodType === InputDateAutoPeriods.MONTH) {
      if (value.toString().length === 1 && value !== '0') {
        const newVal = `0${value}`;
        return newVal
      } else {
        return value
      }
    } else {
      return value
    }
  }

  inputChange(event: Event, period: InputDateAutoDateValidationVal) {
    if (this._readonly) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    const inputElement = event.target as HTMLInputElement;
    this.periodChange(inputElement.value,period.index,false);
    this.runValidtion();
    // is valid but cannot continue like day 4 becouse there is no 40+ days in month
    if (this.periods$.getValue()[period.index].valid && !this.periods$.getValue()[period.index].canContinue) {
      // its not last input so we want to switch to next one and say we are still doing inputs 
      // hence we turn innerChanges to true so that we dont emit until we are finished
      if (period.index < 2) {
        this.innerChanges = true;
        const i = period.index + 1;
        this.inputs.get(i).nativeElement.select();
      } else {
        this.innerChanges = false;
        const duplicatePeriods = cloneDeep(this.periods$.getValue())
        this.onChange(this.currentDate);
        this.dateChange.emit(this.currentDate);
        this.dateValidation.emit(this._dateValidation);
        this.addZeros();
        this.updateWidths(duplicatePeriods);
      }
    }
  }

  inputClick(i: number, event: Event) {
    if (this._readonly) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    this.inputs.get(i).nativeElement.select();
    /*const isNumber = parseInt(this.inputs.get(i).nativeElement.value)
    if (isNaN(isNumber)) {
      this.inputs.get(i).nativeElement.select();
    }*/
  }

  updateWidths(periods: InputDateAutoDateValidationVal[]) {
    // ye ye I know. Its not my proudest moment. I have no clue how this got so fking bad that I have to wrap observable with settimenout combined with manual change detection
    // and yes I did try all other options nothing else worked.
    setTimeout(() => {
      periods.forEach(p => {
        p.width = getWidth(p.type,p.symbols);
      })
      this.periods$.next(periods);
      this.cdr.detectChanges();
    });
  }


}
