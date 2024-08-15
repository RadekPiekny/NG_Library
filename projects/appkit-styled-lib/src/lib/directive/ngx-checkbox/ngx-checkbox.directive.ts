import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[ngx]input[type=checkbox]:not(.toggle)',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxCheckboxDirective),
      multi: true
    }
  ]
})
export class NgxCheckboxDirective
  implements OnInit, OnDestroy, ControlValueAccessor
{
  onChange!: Function;
  _value: any;
  onTouched!: () => void;
  active = false;

  host!: HTMLInputElement;
  container!: HTMLLabelElement;
  checkContainer!: HTMLSpanElement;
  checkBackground!: HTMLSpanElement;
  check!: HTMLSpanElement;
  _checked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _disabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _indeterminate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  subscription!: Subscription;
  iconList: string[] = [
    'icon-checkbox-deselected-fill',
    'icon-checkbox-selected-fill',
    'icon-checkbox-indeterminate-fill'
  ];

  state: Observable<any> = combineLatest([
    this._checked,
    this._disabled,
    this._indeterminate
  ]);

  @Input() set checked(value: boolean | '') {
    const checked = value === '' ? true : value;
    this._checked.next(checked);
  }

  @Input() set disabled(value: boolean | '') {
    const disabled = value === '' ? true : value;
    this._disabled.next(disabled);
  }

  @Input() set indeterminate(value: boolean | '') {
    const indeterminate = value === '' ? true : value;
    this._indeterminate.next(indeterminate);
  }

  constructor(private _renderer: Renderer2, private elementRef: ElementRef) {}
  writeValue(obj: boolean): void {
    this._checked.next(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled.next(isDisabled);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // this causes issues with removal of checkbox before in case of some animation like in ngx-select deactivation
    // I believe we do not need to remove it like this manually as it will get destroyed by parent life cycles
    //this._renderer.removeChild(this.host, this.checkContainer); 
  }

  ngOnInit(): void {
    this.host = this.elementRef.nativeElement as HTMLInputElement;
    const hostClassList = Array.from(this.host.classList);
    const parent = this.elementRef.nativeElement.parentNode;

    this.checkContainer = this._renderer.createElement('div');
    this.checkBackground = this._renderer.createElement('div');
    this.check = this._renderer.createElement('span');

    this.host.classList.add('hidden');
    this.checkBackground.classList.add('ngx-checkbox-background');
    this.checkContainer.classList.add(
      'relative',
      'w-4',
      'h-4',
      'flex',
      'justify-center',
      'items-center',
      ...hostClassList
    );
    this.check.classList.add(
      ...['icon-checkbox-selected-fill', 'Appkit4-icon', 'ngx-checkbox-check']
    );

    this._renderer.insertBefore(parent, this.checkContainer, this.host);
    this.checkContainer.append(this.checkBackground);
    this.checkContainer.append(this.check);
    this.checkContainer.append(this.host);

    this.subscription = this.state.subscribe({
      next: (data) => {
        if (data[0]) {
          //checked
          this.changeToChecked();
        } else {
          this.changeToUnselected();
        }

        if (data[1]) {
          //disabled
          this.disable();
        } else {
          this.enable();
        }

        if (data[0] === true && data[2]) {
          //Indeterminate
          this.changetoIndeterminate();
        }
      }
    });
  }

  @HostListener('change', ['$event']) changeEvent(e: Event) {
    const checked = this._checked.getValue();
    this._checked.next(!checked);
    if (this.onChange) {
      this.onChange(!checked);
    }
  }

  disable() {
    this.host.classList.add('ngx-input');
    this.host.classList.add('disabled');
    this.host.setAttribute('disabled', '');
  }

  enable() {
    this.checkContainer.classList.add('ngx-input');
    this.checkContainer.classList.remove('disabled');
  }

  changeToChecked() {
    this.fill();
    this.changeIcon('icon-checkbox-selected-fill');
  }

  changetoIndeterminate() {
    this.fill();
    this.changeIcon('icon-checkbox-indeterminate-fill');
  }

  fill() {
    this.host.setAttribute('checked', '');
    this.check.style.color = 'var(--color-primary)';
    this.checkBackground.style.backgroundColor = 'white';
  }

  changeToUnselected() {
    this.host.checked = false;
    this.host.removeAttribute('indeterminate');
    this.check.style.color = 'grey';
    this.checkBackground.style.backgroundColor = 'transparent';
    this.changeIcon('icon-checkbox-deselected-fill');
  }

  changeIcon(icon: string) {
    this.iconList.forEach((i) => {
      this.check.classList.remove(i);
    });
    this.check.classList.add(icon);
  }
}
