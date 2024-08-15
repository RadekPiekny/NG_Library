import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxModalModule } from 'rp_custom_library/src/public-api';
import { ColorGuideComponent } from './color-guide/color-guide.component';
import { CoreModule } from '../core/core.module';
import { ThemeColorComponent } from './color-guide/theme-color/theme-color.component';

@NgModule({
  declarations: [ColorGuideComponent, ThemeColorComponent],
  imports: [
    CommonModule,
    StyleGuideRoutingModule,
    ReactiveFormsModule,
    NgxModalModule,
    CoreModule
  ]
})
export class StyleGuideModule {}
