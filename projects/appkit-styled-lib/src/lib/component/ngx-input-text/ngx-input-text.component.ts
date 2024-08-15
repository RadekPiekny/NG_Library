import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  OnChanges,
  AfterViewInit,
  HostBinding,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { NgxFieldErrorComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-field-error';
import { FormFieldBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base';

@Component({
  selector: 'ngx-input-text',
  templateUrl: './ngx-input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputTextComponent),
      multi: true
    }
  ],
})
export class NgxInputTextComponent extends FormFieldBaseComponent<string> implements OnChanges, AfterViewInit  {
  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.nativeInputElement.next(this.inp);
  }

  @HostBinding('class.block') blockClass = true;
  _type: string = 'text';
  @Input() set type(v: 'text' | 'email' | 'password' | 'url') {
    this._type = v;
  }
  @Input() reset: boolean = false;
  @Input() maxlength: number = null;
  @Input() displayMaxLength = true;

  @ViewChild('formField')
  formField!: ElementRef;
  @Output() validation = new EventEmitter<{numeric?: boolean,numericFloating?: boolean}>();
  @ViewChild('inp') inp!: ElementRef;
  @ContentChild(NgxFieldErrorComponent) error: any;

  onKeypress(e: KeyboardEvent) {
    if (this.fc.disabled) {
      e.preventDefault();
      return;
    }
  }

  resetMe(e: Event) {
    e.stopPropagation();
    this.fc.patchValue('');
  }

}
