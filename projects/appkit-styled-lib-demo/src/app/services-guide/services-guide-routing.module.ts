import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnackbarGuideComponent } from './snackbar-guide/snackbar-guide.component';

const routes: Routes = [
  { path: 'snackbar', component: SnackbarGuideComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesGuideRoutingModule {}
