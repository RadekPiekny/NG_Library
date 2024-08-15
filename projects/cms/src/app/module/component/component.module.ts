import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ComponentComponent } from './component/component.component';
import { NgxLibCoreModule } from '../ngx-lib-core/ngx-lib-core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentPresentationComponent } from './component-presentation/component-presentation.component';
import { EditorModule } from '../editor/editor.module';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib';


@NgModule({
  declarations: [
    ComponentComponent,
    ComponentPresentationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLibCoreModule,
    ComponentRoutingModule,
    EditorModule
  ]
})
export class ComponentModule { }
