import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base';

@Component({
  selector: 'ngx-input-autocomplete',
  templateUrl: './ngx-input-autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputAutocompleteComponent),
      multi: true
    }
  ],
})
export class NgxInputAutocompleteComponent extends FormFieldBaseComponent<string> implements AfterViewInit {
  _type: string = 'text';
  @Input() set type(v: 'text' | 'email' | 'password' | 'url') {
    this._type = v;
  }
  @Input() reset: boolean = false;
  @Input() minLength: number = 3;
  @Input() continueTyping: string = `For searching continue typeing(minimal ${this.minLength} characters)`;
  @ViewChild('trigger', { static: true, read: ElementRef }) inputElement: ElementRef<HTMLInputElement>;

  public menuWidthInPx: string = undefined;
  fcAutocomplete: FormControl = new FormControl('');

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.menuWidthInPx = this.getInputWidthInPx();
  }

  private getInputWidthInPx(): string {
    return `${this.inputElement.nativeElement.offsetWidth}px`;
  }
}
