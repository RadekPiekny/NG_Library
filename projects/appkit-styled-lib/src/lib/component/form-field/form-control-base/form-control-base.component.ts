import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { generateUniqueId } from '@rp_custom_library/appkit-styled-lib/src/lib/function';
import { BehaviorSubject } from 'rxjs';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlBaseComponent<T> implements ControlValueAccessor {

  _readonly: boolean = false;
  
  fc: FormControl = new FormControl('');
  _invalid: boolean = false;
  focused = new BehaviorSubject<boolean>(false);
  focused$ = this.focused.asObservable();

  @Input() tabindex: number = 0;
  @Input() set invalid(value: boolean | '' | null) {
    this._invalid = (value === '' || value === null) ? true : value;
  }
  @Input() set value(v: T) {
    this.fc.patchValue(v);
  }
  @Input() id = generateUniqueId();

  @Input() set readonly(value: boolean | '' | null) {
    this._readonly = (value === '' || value === null) ? true : value;
    this.invalid = false; // cannot be readonly and invalid at the same time
    this.fc.enable();
  }
  @Input() set disabled(value: boolean | '' | null) {
    (value === '' || value === null || value === true) ? this.fc.disable() : this.fc.enable();
  }

  @Output() valueChange = new EventEmitter<T>();
  @Output() blur = new EventEmitter<T>();
  
  onTouched!: () => void;
  onChange(newVal: T) {}
  
  writeValue(obj: any): void {
    this.fc.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.fc.disable() : this.fc.enable()
  }

  onFocus() {
    if (this.fc.disabled) {
      return;
    }
    this.focused.next(true);
  }

  onBlur(e: any) {
    if (this.onTouched) {
      this.onTouched();
    }
    this.focused.next(false);
    this.blur.emit(this.fc.value)
  }
}
