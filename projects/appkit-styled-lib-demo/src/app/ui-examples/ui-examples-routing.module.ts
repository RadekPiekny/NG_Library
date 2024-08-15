import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard-1/dashboard-1.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard-1' },
  { path: 'dashboard-1', component: Dashboard1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiExamplesRoutingModule {}
