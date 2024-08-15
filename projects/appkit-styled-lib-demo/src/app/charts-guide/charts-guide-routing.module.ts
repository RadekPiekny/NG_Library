import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartGuideComponent } from './line-chart-guide/line-chart-guide.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartGuideComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsGuideRoutingModule {}
