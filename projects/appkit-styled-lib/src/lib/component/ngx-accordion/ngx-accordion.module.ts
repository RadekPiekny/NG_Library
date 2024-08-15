import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAccordionComponent } from './ngx-accordion.component';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button';
import { NgxAccordionItemComponent } from './ngx-accordion-item/ngx-accordion-item.component';
import { NgxAccordionItemBtnComponent } from './ngx-accordion-item-btn/ngx-accordion-item-btn.component';

@NgModule({
  declarations: [NgxAccordionComponent, NgxAccordionItemComponent, NgxAccordionItemBtnComponent],
  imports: [CommonModule,NgxButtonModule],
  exports: [NgxAccordionComponent, NgxAccordionItemComponent, NgxAccordionItemBtnComponent]
})
export class NgxAccordionModule {}
