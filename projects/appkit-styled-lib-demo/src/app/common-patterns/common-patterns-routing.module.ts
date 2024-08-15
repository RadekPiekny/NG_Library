import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingIndicationComponent } from './loading-indication/loading-indication.component';

const routes: Routes = [
  { path: 'loading-indication', component: LoadingIndicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPatternsRoutingModule { }
