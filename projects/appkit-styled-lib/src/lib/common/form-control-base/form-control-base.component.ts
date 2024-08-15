import { Directive, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Directive({
  selector: '[FormControlBase]',
})
export class FormControlBase implements ControlValueAccessor,OnDestroy {

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscription: Subscription;
  onChange!: Function;
  onTouched!: () => void;
  fc: FormControl = new FormControl();
  _value: any;
  _disabled = false;
  dopiceeeeeeeeeee: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  writeValue(obj: any): void {
    this.fc.patchValue(obj);
    this.dopiceeeeeeeeeee.next(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.fc.disable() : this.fc.enable();
  }

}
