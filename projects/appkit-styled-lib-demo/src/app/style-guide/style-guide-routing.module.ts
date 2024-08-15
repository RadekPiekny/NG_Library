import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorGuideComponent } from './color-guide/color-guide.component';

const routes: Routes = [{ path: 'colors', component: ColorGuideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleGuideRoutingModule {}
