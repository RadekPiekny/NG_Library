import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxColorPickerComponent } from './ngx-color-picker.component';

@NgModule({
  declarations: [NgxColorPickerComponent],
  imports: [CommonModule, OverlayModule],
  exports: [NgxColorPickerComponent]
})
export class NgxColorPickerModule {}
