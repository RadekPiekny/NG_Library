import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderComponent } from './ngx-slider/ngx-slider.component';



@NgModule({
  declarations: [
    NgxSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NgxSliderComponent]
})
export class NgxSliderModule { }
