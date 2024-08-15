import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputTextComponent as NgxInputTextComponent } from './ngx-input-text.component';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button';

@NgModule({
  declarations: [NgxInputTextComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    FormFieldModule,
    NgxButtonModule
  ],
  exports: [NgxInputTextComponent]
})
export class NgxInputTextModule {}
