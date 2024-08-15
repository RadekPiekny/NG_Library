import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '.toggle',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxToggleDirective),
      multi: true
    }
  ]
})
export class NgxToggleDirective implements OnInit, ControlValueAccessor {
  onChange!: Function;
  onTouched!: () => void;

  @Input() label: string = '';
  host!: HTMLInputElement;
  checkboxInput: HTMLInputElement | undefined;
  checkboxInputWrapper!: HTMLDivElement;
  checkboxWrapper!: HTMLLabelElement;
  toggleSpan: HTMLSpanElement | undefined;
  checked = false;
  disabled = false;

  wrapperWidth = 50;
  wrapperHeight = 25;
  wrapperBorderRadius: number = this.wrapperHeight / 2;

  toggleSpanGap = 3;
  toggleSpanFontSize = 16;
  toggleSpanWidth: number = this.wrapperWidth / 2 - 2 * this.toggleSpanGap;

  defaultSize = 50;
  defaultSizeRatio = 1;
  smallSizeRatio = 0.8;
  xSmallSizeRatio = 0.6;
  sizeRatio: number = this.defaultSizeRatio;

  constructor(
    private _renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  writeValue(obj: any): void {
    this.checked = obj;
    this.changeState(this.checked);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    this.host = this.elementRef.nativeElement as HTMLInputElement;
    if (this.host.classList.contains('small')) {
      this.changeSizing(this.smallSizeRatio);
    }
    if (this.host.classList.contains('x-small')) {
      this.changeSizing(this.xSmallSizeRatio);
    } else {
      this.changeSizing(this.defaultSizeRatio);
    }

    this.checkboxInput = this.elementRef.nativeElement as HTMLInputElement;
    this.checkboxInput.style.position = 'absolute';
    this.checkboxInput.style.left = '0';
    this.checkboxInput.style.top = '0';
    this.checkboxInput.style.width = '0';
    this.checkboxInput.style.height = '0';
    this.checkboxInput.style.opacity = '0';
    const parent = this.elementRef.nativeElement.parentNode;

    this.checkboxWrapper = this._renderer.createElement('label');
    this.checkboxWrapper.style.position = 'relative';
    this.checkboxWrapper.style.display = 'inline-flex';
    this.checkboxWrapper.style.width = `${
      this.wrapperWidth * this.sizeRatio
    }px`;
    this.checkboxWrapper.style.minWidth = `${
      this.wrapperWidth * this.sizeRatio
    }px`;
    this.checkboxWrapper.style.height = `${
      this.wrapperHeight * this.sizeRatio
    }px`;
    this.checkboxWrapper.style.borderRadius = `${
      this.wrapperBorderRadius * this.sizeRatio
    }px`;
    this.checkboxWrapper.style.cursor = 'pointer';
    this.checkboxWrapper.style.color = 'white';
    this.checkboxWrapper.style.margin = '.5rem';

    this.toggleSpan = this._renderer.createElement('span');
    if (this.toggleSpan) {
      
      this.toggleSpan.style.fontSize = `${
        this.toggleSpanFontSize * this.sizeRatio
      }px`;
      this.toggleSpan.style.margin = 'auto';
      this.toggleSpan.style.backgroundColor = '#ffffff';
      this.toggleSpan.style.position = 'absolute';
      this.toggleSpan.style.borderRadius = '50%';
      this.toggleSpan.style.width = `${this.toggleSpanWidth * this.sizeRatio}px`;
      this.toggleSpan.style.height = `${this.toggleSpanWidth * this.sizeRatio}px`;
      this.toggleSpan.style.left = `${this.toggleSpanGap}px`;
      this.toggleSpan.style.top = `${this.toggleSpanGap}px`;
      this.toggleSpan.style.transition = '0.4s';
    }

    const cl: DOMTokenList = this.classesToTransfer(); // classes from original input if user use mr-3 etc. it goes to parent container

    if (this.label) {
      this.checkboxInputWrapper = this._renderer.createElement('div');
      this.checkboxInputWrapper.style.display = 'flex';
      this.checkboxInputWrapper.style.alignItems = 'center';
      const lbl = this._renderer.createElement('span');
      lbl.style.fontSize = `${this.toggleSpanFontSize * this.sizeRatio}px`;
      lbl.innerText = this.label;
      this.checkboxInputWrapper.append(this.checkboxWrapper);
      this.checkboxInputWrapper.append(lbl);

      cl.forEach((c) => this.checkboxInputWrapper.classList.add(c));

      this._renderer.insertBefore(
        parent,
        this.checkboxInputWrapper,
        this.checkboxInput
      );
    } else {
      cl.forEach((c) => this.checkboxWrapper.classList.add(c));
      this._renderer.insertBefore(
        parent,
        this.checkboxWrapper,
        this.checkboxInput
      );
    }

    this.checkboxWrapper.appendChild(this.checkboxInput);
    if (this.toggleSpan) {
      this.checkboxWrapper.append(this.toggleSpan);
    }
    this.checked = this.elementRef.nativeElement.checked;
    this.changeState(this.checked);
  }

  @HostListener('change', ['$event'])
  changeEvent(e: Event) {
    this.checked = !this.checked;
    this.changeState(this.checked); //(e.target as HTMLInputElement).checked
  }

  changeState(checked: boolean) {
    this.onChange && this.onChange(this.checked);
    if (this.toggleSpan) {  
      if (checked) {
        this.toggleSpan.style.transform = `translateX(${
          this.wrapperWidth - this.toggleSpanWidth - 2 * this.toggleSpanGap
        }px)`;
        if (this.host.disabled) {
          this.checkboxWrapper.style.backgroundColor =
            'var(--form-control-toggle-bg-checked)'; // colors are in assets folder under color.scss
        } else {
          this.checkboxWrapper.style.backgroundColor =
            'var(--form-control-toggle-bg-checked)';
        }
      } else {
        this.checkboxWrapper.style.backgroundColor = 'transparent';
        this.toggleSpan.style.transform = 'translateX(0)';
        if (this.host.disabled) {
          this.checkboxWrapper.style.backgroundColor =
            'var(--form-control-toggle-bg)'; // colors are in assets folder under color.scss
        } else {
          this.checkboxWrapper.style.backgroundColor =
            'var(--form-control-toggle-bg)';
        }
      }
    }
    if (this.host.disabled) {
      this.checkboxWrapper.style.opacity =
        'var(--form-control-disabled-opacity)';
      this.checkboxWrapper.style.cursor = 'not-allowed';
    }
  }

  changeSizing(sizeRatio: number) {
    this.wrapperWidth = this.defaultSize * sizeRatio;
    this.wrapperHeight = (this.defaultSize / 2) * sizeRatio;
    this.wrapperBorderRadius = this.wrapperHeight / 2;

    this.toggleSpanGap = Math.ceil(0.06 * this.defaultSize * sizeRatio);
    this.toggleSpanFontSize = 16 * sizeRatio;
    this.toggleSpanWidth = this.wrapperHeight - 2 * this.toggleSpanGap;
  }

  classesToTransfer(): DOMTokenList {
    const classListToTransfer: DOMTokenList = this.host.classList;
    classListToTransfer.remove('small');
    classListToTransfer.remove('x-small');
    classListToTransfer.remove('toggle');
    return classListToTransfer;
  }
}
