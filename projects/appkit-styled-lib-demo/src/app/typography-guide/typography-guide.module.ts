import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyGuideRoutingModule } from './typography-guide-routing.module';
import { TypographyGuideComponent } from './typography-guide/typography-guide.component';

@NgModule({
  declarations: [TypographyGuideComponent],
  imports: [CommonModule, TypographyGuideRoutingModule]
})
export class TypographyGuideModule {}
