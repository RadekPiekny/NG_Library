import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDropZoneDirective } from './ngx-dropzone.directive';

@NgModule({
  declarations: [NgxDropZoneDirective],
  imports: [CommonModule],
  exports: [NgxDropZoneDirective]
})
export class NgxDropzoneModule {}
