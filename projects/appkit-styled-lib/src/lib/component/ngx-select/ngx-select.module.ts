import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSelectComponent } from './ngx-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxOptionModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-option';
import { NgxInputTextModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-text';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';
import { FloatingLabelModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/floating-label';
import { NgxInputCheckboxModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-checkbox';

@NgModule({
  declarations: [NgxSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NgxInputCheckboxModule,
    NgxInputTextModule,
    FormFieldModule,
    FloatingLabelModule,
    NgxOptionModule
  ],
  exports: [NgxSelectComponent,NgxOptionModule]
})
export class NgxSelectModule {}
