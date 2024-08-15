import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdElevationComponent } from './md-elevation/md-elevation.component';

const routes: Routes = [{ path: 'elevation', component: MdElevationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDesignRoutingModule {}
