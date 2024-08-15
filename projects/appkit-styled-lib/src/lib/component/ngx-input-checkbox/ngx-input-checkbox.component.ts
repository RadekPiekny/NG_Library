import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  EventEmitter,
  Output,
  Input,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// this comment bellow should fix issues with angular making escape chars for build in .mjs file. It does have checked:after:content-['\\e880'] instead of only checked:after:content-['\e880'] which causes issues
// after:content-['\e98f'] after:font-appkit4-font after:relative after:z-10 appearance-none checked:after:content-['\e880'] checked:text-primary cursor-pointer dark:checked:text-primary-lighten-200 dark:focus:checked:text-primary-lighten-200 dark:focus:outline-primary-lighten-100/20 dark:focus:text-white/100 dark:indeterminate:text-primary-lighten-200 dark:text-white/70 disabled:cursor-not-allowed disabled:opacity-70 focus:checked:text-primary focus:outline focus:outline-4 focus:outline-primary/10 focus:text-neutral-900 h-4 indeterminate:after:content-['\e98d'] indeterminate:text-primary leading-4 outline-offset-0 relative rounded-sm text-neutral-700 w-4
@Component({
  selector: 'ngx-input-checkbox,ngx-checkbox',
  templateUrl: './ngx-input-checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputCheckboxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxInputCheckboxComponent implements ControlValueAccessor,OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.indeterminateChange();
  }

  @Output() valueChange = new EventEmitter<boolean>();
  value = false;

  onChange = (v: boolean) => {};
  onTouched = () => {};
  touched = false;
  _disabled = new BehaviorSubject<boolean>(false);
  @Input() set disabled(value: any) {
    // the reason for settimeout is if a developer set disable state 
    // on form manually in template. In reactive forms it should be handled in the form itself 
    // in typescript but if it is done then setdisable state from control is called
    //  after set disable of thecontrol hence overriding the manually set value. 
    // To prevent this we need move anything in setter to callback queue   
    setTimeout(() => {  
      const disabled = (value === '' || value === null) ? true : value;
      this._disabled.next(disabled);
    });
  }

  _readonly = new BehaviorSubject<boolean>(false);
  @Input() id: string = new Date().toISOString() + 'NgxInputCheckboxComponent' + Math.random();
  @Input() label: string = '';
  @Input() set readonly(v: '' | boolean) {
    if (v === '') {
      this._readonly.next(true);
      return;
    }
    this._readonly.next(v);
  };

  @Input() set checked(v: boolean) {
    this.writeValue(v);
    this.indeterminateChange();
  }

  _indeterminateType: boolean = false;
  _indeterminate: boolean = false;

  @Input() set indeterminate(v: boolean) {
    this._indeterminateType = v;
    this.indeterminateChange();
  };

  writeValue(v: boolean) {
    this.value = v;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this._disabled.next(disabled);
  }

  toggleChecked() {
    if (this._disabled.getValue()) {
      return;
    }
    this.value = !this.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  indeterminateChange() {
    if (this.value && this._indeterminateType) {
      this._indeterminate = true;
    } else {
      this._indeterminate = false;
    }
  }

}
