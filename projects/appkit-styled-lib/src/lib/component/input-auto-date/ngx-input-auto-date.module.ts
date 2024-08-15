import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';
import { InputAutoDateComponent } from './input-auto-date.component';

@NgModule({
  declarations: [
    InputAutoDateComponent, 
  ],
  imports: [
    CommonModule,
    FormFieldModule,
  ],
  exports: [
    InputAutoDateComponent
  ]
})
export class NgxInputAutoDateModule {}
