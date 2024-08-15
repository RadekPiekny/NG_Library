import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStepperComponent } from './ngx-stepper/ngx-stepper.component';
import { NgxStepperItemComponent } from './ngx-stepper-item/ngx-stepper-item.component';



@NgModule({
  declarations: [
    NgxStepperComponent,
    NgxStepperItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxStepperComponent,
    NgxStepperItemComponent
  ]
})
export class NgxStepperModule { }
