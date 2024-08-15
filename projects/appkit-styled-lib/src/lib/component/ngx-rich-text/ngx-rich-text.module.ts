import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxRichTextComponent } from './ngx-rich-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxColorPickerModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-color-picker';
import { NgxCreateLinkOverlayComponent } from './ngx-create-link-overlay/ngx-create-link-overlay.component';
import { OverlaySelectComponent } from './overlay-select/overlay-select.component';
import { NgxTooltipModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/pop-ups/ngx-tooltip';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button';
import { NgxInputTextModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-text';

@NgModule({
  declarations: [
    NgxRichTextComponent,
    NgxCreateLinkOverlayComponent,
    OverlaySelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NgxColorPickerModule,
    NgxTooltipModule,
    NgxButtonModule,
    NgxInputTextModule
  ],
  exports: [NgxRichTextComponent, OverlaySelectComponent]
})
export class NgxRichTextModule {}
