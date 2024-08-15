import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { DarkModeModule } from 'rp_custom_library/src/lib/component/dark-mode';
import { AppkitThemePickerModule, NgxAccordionModule, NgxButtonModule } from 'rp_custom_library/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    DarkModeModule,
    NgxAccordionModule,
    AppkitThemePickerModule,
    NgxButtonModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
          dos: () => import('highlight.js/lib/languages/dos')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
