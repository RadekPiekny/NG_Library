import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { FloatingLabelModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/floating-label';


@NgModule({
  declarations: [
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    FloatingLabelModule
  ],
  exports: [
    FormFieldComponent
  ]
})
export class FormFieldModule { }
