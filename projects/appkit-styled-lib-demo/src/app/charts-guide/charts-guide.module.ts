import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsGuideRoutingModule } from './charts-guide-routing.module';
import { LineChartGuideComponent } from './line-chart-guide/line-chart-guide.component';

@NgModule({
  declarations: [LineChartGuideComponent],
  imports: [CommonModule, ChartsGuideRoutingModule]
})
export class ChartsGuideModule {}
