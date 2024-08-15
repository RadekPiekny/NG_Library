import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputFileComponent } from './ngx-input-file.component';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';
import { NgxDropzoneModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/ngx-dropzone';

@NgModule({
  declarations: [NgxInputFileComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    FormFieldModule,
    NgxDropzoneModule
  ],
  exports: [NgxInputFileComponent]
})
export class NgxInputFileModule {}
