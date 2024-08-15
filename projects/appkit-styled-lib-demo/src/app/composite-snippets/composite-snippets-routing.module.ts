import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentsComponent } from './form-components/form-components.component';
import { BannerComponent } from './banner/banner.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'banner', component: BannerComponent },
  { path: 'form-guide', component: FormComponentsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsGuideRoutingModule {}
