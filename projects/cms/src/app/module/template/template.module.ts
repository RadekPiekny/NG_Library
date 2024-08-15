import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { NgxLibCoreModule } from '../ngx-lib-core/ngx-lib-core.module';
import { EditorModule } from '../editor/editor.module';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    NgxLibCoreModule,
    EditorModule
  ]
})
export class TemplateModule { }
