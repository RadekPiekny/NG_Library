import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxInputAutocompleteComponent } from './ngx-input-autocomplete.component';
import { NgxInputTextModule } from     '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-text';
import { NgxMenuModule } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/pop-ups/ngx-menu';

@NgModule({
  declarations: [
    NgxInputAutocompleteComponent
  ],
  imports: [
    CommonModule,
    NgxInputTextModule,
    NgxMenuModule
  ],
  exports: [
    NgxInputAutocompleteComponent
  ]
})
export class NgxInputAutocompleteModule { }
