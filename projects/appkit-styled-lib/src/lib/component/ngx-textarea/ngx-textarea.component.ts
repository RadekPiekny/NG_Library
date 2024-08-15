import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormFieldBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base';


@Component({
  selector: 'ngx-textarea',
  templateUrl: './ngx-textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxTextareaComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTextareaComponent extends FormFieldBaseComponent<string> implements ControlValueAccessor, AfterViewInit  {
  
  @HostBinding('class.block') blockClass = true;
  @Input() maxlength: number | undefined;
  @Input() rows = 2; // default by textarea
  @Input() resize = true;
  @Output() inputElement = new EventEmitter<ElementRef<HTMLTextAreaElement>>;
  counter$: Observable<number> = this.fc.valueChanges.pipe(
    map(text => {
      return text.length
    }),
    startWith(0)
  )

  @ViewChild('inp') inp: ElementRef<HTMLTextAreaElement>;
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.nativeInputElement.next(this.inp);
    setTimeout(() => {
      this.inputElement.emit(this.inp)
    });
  }

  onKeypress(e: KeyboardEvent) {
    if (this.maxlength) {
      if (this.maxlength  ) {
        
      }
    }
    if (this.fc.disabled) {
      e.preventDefault();
      return;
    }
  }

  textAreaStyle = combineLatest([this.focused$,this.data$]).pipe(
    map(focus => {
      if (!this.host.nativeElement) {
        return {marginTop: '4px'};
      }
      const dataWithLabel = !!(this.fc.value && focus[1].label);
      const focusedWithLabel = !!(focus[0] && focus[1].label);
      const placeholderWithLabelNoValue = !!(focus[1].placeholder && !this.fc.value && focus[1].label);
      if ( dataWithLabel || focusedWithLabel || placeholderWithLabelNoValue || this.maxlength ) {
        return {marginTop: '15px'}
      } 
      if (this.label) {
        return {marginTop: '15px'}
      }
      return {marginTop: '4px'}
      
    })
  )

}
