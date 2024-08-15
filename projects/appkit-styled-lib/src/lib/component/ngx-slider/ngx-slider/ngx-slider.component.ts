import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-slider',
  templateUrl: './ngx-slider.component.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSliderComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxSliderComponent implements ControlValueAccessor, OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 5;
  @Input() set value(v: number) {
    this.newValue(v);
  };
  _data = new BehaviorSubject<{value: number, ratio: number}>({value: 0, ratio: 0});
  data$ = this._data.asObservable();

  selectLength: number = 0;

  @Input() title: string = '';

  _showValue: boolean = true;
  @Input() set showValue(v: boolean | 'true' | 'false') {
    if(typeof v === 'boolean') {
      this._showValue = v;
    } else {
      if(v === 'true') {
        this._showValue = true;
      } else if(v === 'false') {
        this._showValue = false;
      }
    }
  }

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  _onChange: (_: any) => void = () => {};
  _onTouched: () => void = () => {};

  _disabled: boolean = false;
  @Input() set disabled(v: boolean | '') {
    this._disabled = (v === '' ? true : v);
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.newValue(this.value);
  }

  newValue(v: number | null | undefined) {
    if(v === null || v === undefined) {
      this._data.next({value: this.min, ratio: 0});
      this.selectLength = 0;
      return;
    }
    this.selectLength = (100 * ((v - this.min) / (this.max - this.min)));
    this._data.next({value: v, ratio: this.selectLength});
  }

  changeValue(e:any) {
    const target = e.target as HTMLInputElement;
    const numericValue: number = parseFloat(target.value);
    this.newValue(numericValue);
    this.emitValue();
    this._onChange(numericValue);
  }

  emitValue() {
    this.valueChange.emit(this._data.getValue().value);
  }

  writeValue(v: any): void {
    this.newValue(v)
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.cdr.markForCheck();
  }

}
