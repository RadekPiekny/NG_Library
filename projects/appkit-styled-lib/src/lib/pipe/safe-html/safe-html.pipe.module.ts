import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGXSafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [NGXSafeHtmlPipe],
  imports: [CommonModule],
  exports: [NGXSafeHtmlPipe]
})
export class NgxSafeHTMLModule {}
