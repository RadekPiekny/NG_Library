import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxModalComponent } from './ngx-modal.component';

@NgModule({
  declarations: [NgxModalComponent],
  imports: [CommonModule, OverlayModule],
  exports: [NgxModalComponent]
})
export class NgxModalModule {}
