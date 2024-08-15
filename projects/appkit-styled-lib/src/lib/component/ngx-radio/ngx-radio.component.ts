import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlStatus, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-radio, ngx-input-radio',
  templateUrl: './ngx-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxRadioComponent implements ControlValueAccessor,OnDestroy {

  onChange!: Function;
  _disabled = false;
  _checked = false;
  @Input() label: any;
  fc: FormControl = new FormControl('');
  onTouched!: () => void;
  @Input() id: string = new Date().toISOString() + 'NgxRadioComponent' + Math.random();
  @Input()
  name!: string;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @Input() set disabled(v: boolean) {
    this._disabled = v;
  };
  _readonly: boolean = false;
  @Input() set readonly(value: boolean | '' | null) {
    this._readonly = (value === '' || value === null) ? true : value;
    this.fc.enable();
  }
  @Input() set checked(value: boolean | '' | null) {
    this._checked = (value === '' || value === null) ? true : value;
  }

  s!: Subscription;
  
  constructor(@Optional() @Self() private ngControl: NgControl,private cdr: ChangeDetectorRef) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }
  ngOnDestroy(): void {
    this.s?.unsubscribe();
  }

  ngOnInit() {
    if (this.ngControl?.control) {
      this.s = this.ngControl.control.valueChanges.subscribe(value => {
        this.writeValue(value);
      });
      this.ngControl.control.statusChanges.subscribe((status: FormControlStatus) => {
        this.setDisabledState(status === 'DISABLED');
      })
    }
  }

  writeValue(obj: any): void {
    this._checked = obj === this.value;
    this.fc.patchValue(obj);
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.cdr.detectChanges();
  }

  vChange(e: Event) {

    if (this._disabled) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    if (this.fc.value === this.value) {
      return;
    }
    if (this._checked) {
      this.valueChange.emit(this.value);
    }
    this._checked = true;
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
  
}
