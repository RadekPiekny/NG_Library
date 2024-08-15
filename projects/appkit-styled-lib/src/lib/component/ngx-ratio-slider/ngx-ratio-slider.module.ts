import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRatioSliderComponent } from './ngx-ratio-slider.component';
import { MouseTrackerModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/mouse-tracker';
import { NgxInputNumberModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-number';

@NgModule({
  declarations: [
    NgxRatioSliderComponent
  ],
  imports: [
    CommonModule,
    MouseTrackerModule,
    NgxInputNumberModule
  ],
  exports: [
    NgxRatioSliderComponent
  ]
})
export class NgxRatioSliderModule { }
