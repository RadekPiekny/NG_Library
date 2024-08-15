import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMenuDirective } from './ngx-menu.directive';

@NgModule({
  declarations: [NgxMenuDirective],
  imports: [CommonModule],
  exports: [NgxMenuDirective]
})
export class NgxMenuModule {}
