import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppkitColorPickerModule, NgxButtonModule, NgxMenuModule, NgxModalModule } from '@rp_custom_library/appkit-styled-lib/src/public-api';
import { NgxTooltipModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/pop-ups/ngx-tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DarkModeModule, NgxRichTextModule, NgxSelectModule } from '@rp_custom_library/appkit-styled-lib/src/public-api';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NotExistComponent } from '../../component/not-exist/not-exist.component';
import { GroupFormComponent } from '../../component/group-form/group-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  NgxMenuModule,
  OverlayModule,
  NgxTooltipModule,
  DragDropModule,
  AppkitColorPickerModule,
  ScrollingModule,
  NgxSelectModule,
  DarkModeModule,
  NgxRichTextModule,
  ClipboardModule,
  NgxModalModule,
  NgxButtonModule
]

const components = [
  NotExistComponent,
  GroupFormComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class NgxLibCoreModule { }
