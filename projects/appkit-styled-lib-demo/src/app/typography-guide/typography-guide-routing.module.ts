import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyGuideComponent } from './typography-guide/typography-guide.component';

const routes: Routes = [{ path: '', component: TypographyGuideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypographyGuideRoutingModule {}
