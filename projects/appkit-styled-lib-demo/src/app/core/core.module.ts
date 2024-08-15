import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxModalModule } from 'rp_custom_library/src/lib/component/ngx-modal/public-api';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxSafeHTMLModule } from 'rp_custom_library/src/lib/pipe/safe-html/public-api';
import { NgxPaginationModule } from 'rp_custom_library/src/lib/component/ngx-pagination/public-api';
import { NgxAccordionModule } from 'rp_custom_library/src/lib/component/ngx-accordion/public-api';
import { CodeShowComponent } from '../demo-components/code-show/code-show.component';
import {
  AppkitColorPickerModule,
  AppkitThemePickerModule,
  NgxAvatarModule,
  NgxBreadcrumbModule,
  NgxCalendarModule,
  NgxCheckboxModule,
  NgxInputCheckboxModule,
  NgxInputDateModule,
  NgxInputTextModule,
  NgxLoaderModule,
  NgxMenuContainerModule,
  NgxRichTextModule,
  NgxSelectModule,
  NgxSliderModule,
  NgxTabModule
} from 'rp_custom_library/src/public-api';
import { NgxAvatarsRowModule } from 'rp_custom_library/src/lib/directive/ngx-avatars-row/public-api';
import { NgxTooltipModule } from 'rp_custom_library/src/lib/directive/pop-ups/ngx-tooltip/public-api';
import { NgxMenuModule } from 'rp_custom_library/src/lib/directive/pop-ups/ngx-menu/public-api';
import { NgxBadgeModule } from 'rp_custom_library/src/lib/component/ngx-badge';
import { ComponentDemonstrationComponent } from './component-demonstration/component-demonstration.component';
import { NgxToggleModule } from 'rp_custom_library/src/lib/component/ngx-toggle';
import { NgxTextareaModule } from 'rp_custom_library/src/lib/component/ngx-textarea';
import { NgxRadioModule } from 'rp_custom_library/src/lib/component/ngx-radio';
import { NgxButtonModule } from 'rp_custom_library/src/lib/component/ngx-button';
import { NgxInputFileModule } from 'rp_custom_library/src/lib/component/ngx-input-file';
import { NgxInputNumberModule } from 'rp_custom_library/src/lib/component/ngx-input-number';
import { NgxStepperModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-stepper/ngx-stepper.module';
import { NgxTableModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-table';

const modules: any[] = [
  NgxModalModule,
  NgxTooltipModule,
  HighlightModule,
  NgxSafeHTMLModule,
  NgxPaginationModule,
  NgxAccordionModule,
  AppkitThemePickerModule,
  NgxCalendarModule,
  NgxInputDateModule,
  NgxMenuModule,
  NgxBadgeModule,
  AppkitColorPickerModule,
  NgxAvatarsRowModule,
  NgxSelectModule,
  NgxInputTextModule,
  NgxInputCheckboxModule,
  NgxTextareaModule,
  NgxToggleModule,
  NgxRadioModule,
  NgxButtonModule,
  NgxLoaderModule,
  NgxInputFileModule,
  NgxAvatarModule,
  NgxTabModule,
  NgxBreadcrumbModule,
  NgxSliderModule,
  NgxCheckboxModule,
  NgxInputNumberModule,
  NgxStepperModule,
  NgxMenuContainerModule,
  NgxTableModule
];
@NgModule({
  declarations: [CodeShowComponent, ComponentDemonstrationComponent],
  imports: [CommonModule, FormsModule, modules],
  exports: [modules, CodeShowComponent],
  providers: []
})
export class CoreModule {}
