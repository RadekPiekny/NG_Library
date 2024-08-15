import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationComponent } from './ngx-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlBaseModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';
import { NgxPaginationDisabledPreviousPipe } from './ngx-pagination-disabled-previous.pipe';
import { NgxPaginationDisabledNextPipe } from './ngx-pagination-disabled-next.pipe';
import { NgxInputNumberModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-number';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button';

@NgModule({
  declarations: [
    NgxPaginationComponent, 
    NgxPaginationDisabledPreviousPipe,
    NgxPaginationDisabledNextPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlBaseModule,
    NgxInputNumberModule,
    NgxButtonModule
  ],
  exports: [NgxPaginationComponent]
})
export class NgxPaginationModule {}
