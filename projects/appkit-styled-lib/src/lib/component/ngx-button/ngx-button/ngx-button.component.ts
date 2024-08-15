import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FormControlSize, getTailwindHeightForFormControl } from '@rp_custom_library/appkit-styled-lib/src/lib/model/form-control';

@Component({
  selector: 'ngx-button',
  templateUrl: './ngx-button.component.html',
  styles: [':host { display: inline-block }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxButtonComponent implements OnInit, OnChanges {
  private newParent: any;
  private origParent: any;
  private origElement: any;
  @HostBinding('class.pointer-events-none') className = false;
  _compact: boolean = false
  @Input() set compact(v: boolean | '' | 'true' | 'false') {
    this._compact = (v === '' ? true : (typeof v === 'boolean' ? v : (v === 'true' ? true : false)));
  }
  _negative: boolean = false;
  @Input() set negative(v: boolean | '' | 'true' | 'false') {
    this._negative = (v === '' ? true : (typeof v === 'boolean' ? v : (v === 'true' ? true : false)));
  }
  @Input() cssClass: string = '';

  heightClass: string = '';
  _size: FormControlSize;
  @Input() set size(v: FormControlSize) {
    const heightClass = getTailwindHeightForFormControl(v);
    this._size = v;
    this.heightClass = heightClass;
  }

  _id!: string;
  @Input() set id(v: string) {
    this._id = v;
  }

  _type: 'button' | 'reset' | 'submit' = 'button';
  @Input() set type(v: 'button' | 'reset' | 'submit') {
    this._type = v;
  }

  _icon: boolean = false;;
  @Input() set icon(value: boolean | '') {
    this._icon = value === '' ? true : value;
  }

  _variation: 'primary' | 'secondary' | 'tertiary' | 'text' | 'negative' | 'transparent' = 'primary';
  @Input() set variation(v: 'primary' | 'secondary' | 'tertiary' | 'text' | 'negative' | 'transparent') {
    this._variation = v;
  }

  _standard: 'base' | 'standard' = 'standard';
  @Input() set standard(v: 'base' | 'standard') {
    this._standard = v;
  }

  _disabled: boolean = false;
  @Input() set disabled(v: '' | boolean) {
    this._disabled = (v === '' ? true : v);
    if (this._disabled) {
      //this.disableParent();
    } else {
      //this.removeParentDiv();
    }
  }
  
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.init();
    }
  }

  initialized: boolean = false;
  ngOnInit(): void {
    this.initialized = true;
    this.init();
  }

  init() {
    this.resetFinalClass();
    this.changeStandard(this._standard);
    if (this._standard) {
      this.changeVariation(this._variation);
      this.changeCompact(this._compact);
      this.changeNegative(this._negative);
      this.changeIcon();
    }
    this.finalClass += ' disabled:opacity-40 disabled:cursor-not-allowed';
    this.finalClass += ` ${this.heightClass}`;
  }


  baseClass = 'text-base cursor-pointer flex justify-center items-center whitespace-nowrap';
  standardButtonClass = 'rounded leading-6 relative tracking-normal px-4 py-1';

  primaryVariation = 'bg-primary enabled:hover:bg-primary-lighten-100 enabled:active:bg-primary';
  secondaryVariation = 'bg-transparent border border-primary dark:border-primary-lighten-200 dark:text-primary-lighten-200 text-primary enabled:hover:!bg-primary/5 dark:enabled:hover:!bg-primary/20 enabled:active:!bg-primary/10 dark:enabled:active:!bg-primary/30';
  tertiaryVariation = 'dark:bg-neutral-800 bg-neutral-200 enabled:hover:bg-neutral-150 dark:enabled:hover:bg-neutral-800 enabled:active:bg-neutral-100 dark:enabled:active:bg-neutral-600 ';
  textVariation = 'dark:text-primary-lighten-200 text-primary enabled:hover:bg-primary/10 dark:enabled:hover:bg-primary/20 enabled:active:bg-primary/20 dark:enabled:active:bg-primary/30';
  transparentVariation = 'enabled:hover:bg-neutral-900/5 enabled:active:bg-neutral-900/10 dark:enabled:hover:bg-neutral-100/5 dark:enabled:active:bg-neutral-100/10';
  iconCompactClass = 'rounded relative tracking-normal leading-8 w-8 h-8';
  iconNormalClass = 'rounded  relative tracking-normal leading-10 w-10 h-10';
  /*
  'bg-negative enabled:hover:bg-negative-lighten-100 enabled:active:bg-negative';
'bg-transparent border border-negative dark:border-negative-lighten-200 dark:text-negative-lighten-200 text-negative enabled:hover:!bg-negative/5 dark:enabled:hover:!bg-negative/20 enabled:active:!bg-negative/10 dark:enabled:active:!bg-negative/30';
'dark:bg-neutral-800 bg-neutral-200 enabled:hover:bg-neutral-150 dark:enabled:hover:bg-neutral-800 enabled:active:bg-neutral-100 dark:enabled:active:bg-neutral-600 ';
'dark:text-negative-lighten-200 text-negative enabled:hover:bg-negative/10 dark:enabled:hover:bg-negative/20 enabled:active:bg-negative/20 dark:enabled:active:bg-negative/30';
'enabled:hover:bg-neutral-900/5 enabled:active:bg-neutral-900/10 dark:enabled:hover:bg-neutral-100/5 dark:enabled:active:bg-neutral-100/10';
  */
  
  compactClass = 'leading-8 h-8';
  standardSizeClass = 'leading-10 h-10';

  finalClass: string = '';


  resetFinalClass() {
    this.finalClass = "";
  }

  changeVariation(v: 'primary' | 'secondary' | 'tertiary' | 'text' | 'negative' | 'transparent') {
    switch(v) {
      case 'primary':
        this.finalClass += ` ${this.primaryVariation}`;
        break;
      case 'secondary':
        this.finalClass += ` ${this.secondaryVariation}`;
        break;
      case 'tertiary':
        this.finalClass += ` ${this.tertiaryVariation}`;
        break;
      case 'text':
        this.finalClass += ` ${this.textVariation}`;
        break;
      case 'transparent':
        this.finalClass += ` ${this.transparentVariation}`;
        break;
      case 'negative':
        this.finalClass += ` ${this.primaryVariation}`;
        break;
      default: 
        this.finalClass += ` ${this.primaryVariation}`;
        break;
    }
  }

  changeCompact(v: boolean) {
    if (v) {
      this.finalClass += ` ${this.compactClass}`;
    } else {
      this.finalClass += ` ${this.standardSizeClass}`;
    }
  }

  changeNegative(v: boolean) {
    if (v) {
      this.finalClass = this.replaceAllOccurrences(this.finalClass,"primary","negative");
    } else {
      this.finalClass = this.replaceAllOccurrences(this.finalClass,"negative","primary");
    }
  }

  replaceAllOccurrences(inputString: string, search: string, replacement: string): string {
    return inputString.split(search).join(replacement);
  }

  changeStandard(v: 'base' | 'standard') {
    switch(v) {
      case 'base':
        this.finalClass += ` ${this.baseClass}`;
        break;
      case 'standard':
        this.finalClass += ` ${this.baseClass} ${this.standardButtonClass}`;
        break;
      default: 
        this.finalClass += ` ${this.baseClass} ${this.standardButtonClass}`;
        break;
    }
    if (v === 'base') {
      const host = this.el.nativeElement;
      const classList = host.classList
      this.renderer.setAttribute(host, 'class', `${this.finalClass} ${classList}`);
    }
  }

  changeIcon() {
    if (!this._icon) {
      return;
    }
    this.finalClass = this.finalClass.replace(this.standardButtonClass,'');
    this.finalClass = this.finalClass.replace(this.iconCompactClass,'');
    this.finalClass = this.finalClass.replace(this.iconNormalClass,'');
    if (this._compact) {
      this.finalClass += ` ${this.iconCompactClass}`;
    } else {
      this.finalClass += ` ${this.iconNormalClass}`; 
    }
  }


  disableParent() {
    this.origParent = this.el.nativeElement.parentElement;
    this.origElement = this.el.nativeElement;
    this.newParent = this.renderer.createElement('div');
    this.renderer.addClass(this.newParent, 'cursor-not-allowed');
    this.renderer.addClass(this.newParent, 'inline-block');
    
    this.renderer.insertBefore(this.el.nativeElement.parentElement, this.newParent, this.el.nativeElement);
    this.renderer.appendChild(this.newParent, this.origElement);
  }

  private removeParentDiv() {
    if (!this.newParent) {
      return;
    }
    this.renderer.insertBefore(this.origParent, this.origElement, this.newParent);
    this.renderer.removeChild(this.origParent, this.newParent);
  }

}
