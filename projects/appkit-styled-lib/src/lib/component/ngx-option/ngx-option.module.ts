import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxInputCheckboxModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-checkbox';
import { NgxOptionComponent } from './ngx-option.component';

@NgModule({
  declarations: [NgxOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NgxInputCheckboxModule,
  ],
  exports: [NgxOptionComponent]
})
export class NgxOptionModule {}
