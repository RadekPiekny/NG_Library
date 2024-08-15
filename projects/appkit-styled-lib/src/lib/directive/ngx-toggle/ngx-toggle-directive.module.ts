import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxToggleDirective } from './ngx-toggle.directive';

@NgModule({
  declarations: [NgxToggleDirective],
  imports: [CommonModule],
  exports: [NgxToggleDirective]
})
export class NgxToggleDirectiveModule {}
