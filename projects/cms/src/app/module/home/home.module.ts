import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxLibCoreModule } from '../ngx-lib-core/ngx-lib-core.module';
import { TemplateCardVisualXComponent } from './template-card-visual-x/template-card-visual-x.component';
import { TemplateCardVisualXxComponent } from './template-card-visual-xx/template-card-visual-xx.component';
import { TemplateCardVisualXxxComponent } from './template-card-visual-xxx/template-card-visual-xxx.component';
import { TemplateCardVisualXxxxComponent } from './template-card-visual-xxxx/template-card-visual-xxxx.component';


@NgModule({
  declarations: [
    HomeComponent,
    TemplateCardVisualXComponent,
    TemplateCardVisualXxComponent,
    TemplateCardVisualXxxComponent,
    TemplateCardVisualXxxxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxLibCoreModule
  ]
})
export class HomeModule { }
