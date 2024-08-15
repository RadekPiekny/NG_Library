import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldBaseComponent } from './form-field-base.component';
import { FormControlBaseModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';

@NgModule({
  declarations: [
    FormFieldBaseComponent
  ],
  imports: [
    CommonModule,
    FormControlBaseModule
  ]
})
export class FormFieldBaseModule { }
