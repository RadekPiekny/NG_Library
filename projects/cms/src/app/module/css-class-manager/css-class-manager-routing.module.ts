import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssListComponent } from './css-list/css-list.component';

const routes: Routes = [
  {path: '', component: CssListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssClassManagerRoutingModule { }
