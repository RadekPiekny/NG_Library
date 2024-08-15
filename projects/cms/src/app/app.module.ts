import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLibCoreModule } from './module/ngx-lib-core/ngx-lib-core.module';
import { AppkitThemePickerModule, NgxLightModeModule } from '@rp_custom_library/appkit-styled-lib/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiModule } from './services/api/api.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: environment.localUrl }),
    NgxLibCoreModule,
    NgxLightModeModule,
    AppkitThemePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
