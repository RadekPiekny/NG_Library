import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputNumberComponent } from './ngx-input-number.component';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';

@NgModule({
  declarations: [NgxInputNumberComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    FormFieldModule
  ],
  exports: [NgxInputNumberComponent]
})
export class NgxInputNumberModule {}
