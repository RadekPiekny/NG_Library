import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxFileDropComponent } from './ngx-file-drop.component';
import { NgxFileComponent } from './ngx-file/ngx-file.component';
import { NgxFileCardComponent } from './ngx-file-card/ngx-file-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxDropzoneModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/ngx-dropzone';
import { NgxToggleDirectiveModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/ngx-toggle';

@NgModule({
  declarations: [NgxFileDropComponent, NgxFileComponent, NgxFileCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NgxDropzoneModule,
    DragDropModule,
    NgxToggleDirectiveModule
  ],
  exports: [
    NgxFileDropComponent,
    NgxFileComponent,
    NgxFileCardComponent,
    NgxDropzoneModule
  ]
})
export class NgxFileDropModule {}
