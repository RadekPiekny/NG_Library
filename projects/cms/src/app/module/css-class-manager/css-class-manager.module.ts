import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssClassManagerRoutingModule } from './css-class-manager-routing.module';
import { CssListComponent } from './css-list/css-list.component';
import { CssGroupComponent } from './css-group/css-group.component';
import { CssGroupFormComponent } from './css-group-form/css-group-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLibCoreModule } from '../ngx-lib-core/ngx-lib-core.module';
import { CssClassFormComponent } from './css-class-form/css-class-form.component';
import { CssGroupFamilyComponent } from './css-group-family/css-group-family.component';


@NgModule({
  declarations: [
    CssListComponent,
    CssGroupComponent,
    CssGroupFormComponent,
    CssClassFormComponent,
    CssGroupFamilyComponent
  ],
  imports: [
    CommonModule,
    CssClassManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLibCoreModule
  ]
})
export class CssClassManagerModule { }
