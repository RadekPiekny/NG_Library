import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppkitThemePickerComponent } from './appkit-theme-picker.component';
import { BrandPaletteIconModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/brand-palette-icon';

@NgModule({
  declarations: [AppkitThemePickerComponent],
  imports: [
    CommonModule,
    BrandPaletteIconModule
  ],
  exports: [AppkitThemePickerComponent]
})
export class AppkitThemePickerModule {}
