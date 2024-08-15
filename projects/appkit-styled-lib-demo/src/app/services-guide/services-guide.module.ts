import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ServicesGuideRoutingModule } from './services-guide-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarGuideComponent } from './snackbar-guide/snackbar-guide.component';
import { GuideElementsModule } from '../components-guide/core/guide-elements.module';
import { SnackbarGuideFormComponent } from './snackbar-guide/snackbar-guide-form/snackbar-guide-form.component';

@NgModule({
  declarations: [
    SnackbarGuideComponent,
    SnackbarGuideFormComponent
  ],
  imports: [
    CommonModule,
    ServicesGuideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    GuideElementsModule
  ],
  exports: [
    SnackbarGuideComponent
  ]
})
export class ServicesGuideModule { }
