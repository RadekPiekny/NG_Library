import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTextareaComponent as NgxTextareaComponent } from './ngx-textarea.component';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';

@NgModule({
    declarations: [NgxTextareaComponent],
    imports: [
      CommonModule, 
      FormsModule, 
      ReactiveFormsModule,
      FormFieldModule
    ],
    exports: [NgxTextareaComponent]
  })
  export class NgxTextareaModule {}
  