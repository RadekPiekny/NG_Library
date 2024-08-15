import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTabComponent } from './ngx-tab.component';
import { NgxTabItemComponent } from './ngx-tab-item/ngx-tab-item.component';

@NgModule({
  declarations: [NgxTabComponent, NgxTabItemComponent],
  imports: [CommonModule],
  exports: [NgxTabComponent, NgxTabItemComponent],
})
export class NgxTabModule {}
