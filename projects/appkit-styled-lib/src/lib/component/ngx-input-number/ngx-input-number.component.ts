import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  ContentChild,
  OnChanges,
  AfterViewInit,
  HostBinding,
  forwardRef,
  Input,
} from '@angular/core';
import { NgxFieldErrorComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-field-error';
import { FormFieldBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-input-number',
  templateUrl: './ngx-input-number.component.html',
  styleUrls: ['./ngx-input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputNumberComponent),
      multi: true
    }
  ],
})
export class NgxInputNumberComponent extends FormFieldBaseComponent<number> implements OnChanges, AfterViewInit {

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.nativeInputElement.next(this.inp);
  }
  
  @HostBinding('class.block') blockClass = true;
  @ViewChild('formField')
  formField!: ElementRef;
  @Output() validation = new EventEmitter<{numeric?: boolean,numericFloating?: boolean}>();
  @ViewChild('inp')
  inp!: ElementRef;
  @ContentChild(NgxFieldErrorComponent) error: any;
  @Input() cssClass: string = '';
  @Input() cssStyle: string = '';
  @Input() max: number = undefined;
  @Input() min: number = undefined;

  onKeypress(e: KeyboardEvent) {
    if (this.fc.disabled) {
      e.preventDefault();
      return;
    }
  }
}
