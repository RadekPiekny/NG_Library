import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ComponentsGuideRoutingModule } from './composite-snippets-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    BannerComponent,
    FormComponentsComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    ComponentsGuideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class CompositeSnippetsModule { }
