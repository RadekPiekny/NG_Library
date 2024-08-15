import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCheckboxDirective } from './ngx-checkbox.directive';

@NgModule({
  declarations: [NgxCheckboxDirective],
  imports: [CommonModule],
  exports: [NgxCheckboxDirective]
})
export class NgxCheckboxModule {}
