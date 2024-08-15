import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-form-field',
  templateUrl: './form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['readonly'] || changes['disabled'] || changes['invalid']) {
      this.stateCssClass = this.getStateClass();
    }
    if (changes['isFileType']) {
      if (changes['isFileType'].currentValue === true) {
        this.borderCssClass = 'border-dashed';
      } else {
        this.borderCssClass = '';
      }
    }
  }

  ngOnInit(): void {
    this.stateCssClass = this.getStateClass();
  }

  getStateClass(){
    if (this.invalid) {
      return 'focus-within:!outline-negative/10 text-negative dark:text-negative-lighten-200 !bg-negative/10 !border-negative/70 hover:!bg-negative/[0.08] dark:focus-within:!outline-negative/20';
    }
    if (this.readonly) {
      return '!text-opacity-70 dark:text-white text-neutral-800 cursor-default border-neutral-300 dark:border-neutral-500'
    }
    if (this.disabled) {
      return 'opacity-60 cursor-not-allowed border-neutral-300 dark:border-neutral-500';
    } else {
      return 'hover:bg-neutral-950/5 dark:hover:bg-neutral-50/10 border-neutral-300 dark:border-neutral-500 dark:focus-within:border-primary dark:bg-white/5 focus-within:outline focus-within:outline-4 outline-transparent  focus-within:outline-primary/10 dark:focus-within:outline-primary-lighten-100/20 dark:focus-within:border-primary-lighten-100 focus-within:border-primary';
    }
  }

  @Input() data!: {label: string, placeholder: string, leftIcon: string};
  @Input() leftIcon = '';
  @Input() isFileType: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label!: string;
  @Input() fieldFocus: boolean = false;
  @Input() invalid: boolean = false;
  @Input() readonly: boolean = false;
  @Input() contentPopulated: boolean = false; // if there is some value in input then we move label up otherwise it stays in the middle
  @Input() heightClass!: string;
  @Input() fieldCssClass: string = '';
  stateCssClass!: string;
  borderCssClass!: string;

  @Output() formFieldClick = new EventEmitter();

  clicked() {
    if (this.disabled) {
      return;
    }
    this.formFieldClick.emit(null);
  }
  
}
