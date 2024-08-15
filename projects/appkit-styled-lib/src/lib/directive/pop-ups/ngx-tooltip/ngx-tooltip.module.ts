import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTooltipDirective } from './ngx-tooltip.directive';

@NgModule({
  declarations: [NgxTooltipDirective],
  imports: [CommonModule],
  exports: [NgxTooltipDirective]
})
export class NgxTooltipModule {}
