import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import { NgxTooltipModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/pop-ups/ngx-tooltip';
import { CountdownCircleModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/countdown-circle';


@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    NgxTooltipModule,
    CountdownCircleModule
  ],
  exports: [SnackBarComponent]
})
export class NgxSnackbarModule {}
