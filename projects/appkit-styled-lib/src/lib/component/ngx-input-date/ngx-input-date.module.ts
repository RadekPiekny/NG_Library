import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxInputDateComponent } from './ngx-input-date.component';
import { NgxCalendarModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-calendar';
import { NgxTooltipModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/pop-ups/ngx-tooltip';
import { FormFieldModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field';
import { FloatingLabelModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/floating-label';
import { NgxInputAutoDateModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/input-auto-date';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button';

@NgModule({
  declarations: [
    NgxInputDateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NgxCalendarModule,
    NgxTooltipModule,
    CommonModule,
    FormFieldModule,
    FloatingLabelModule,
    NgxInputAutoDateModule,
    NgxButtonModule
  ],
  exports: [NgxInputDateComponent]
})
export class NgxInputDateModule {}
