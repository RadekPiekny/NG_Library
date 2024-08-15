import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'installation',
  templateUrl: './installation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallationComponent {
  constructor(private clipboard: Clipboard) {}

  ViewOptions = ['Windows', 'Other'];
  selected = 'Windows';

  step: string =` node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => {' b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
  `
  
  chooseMode(view: any) {
    this.selected = view;
  }

  copyToClipboard(code: any) {
    this.clipboard.copy(code.innerHTML);
  }

 date = new Date(2023,10,26);
 vstsNpmAuth = `npx vsts-npm-auth -config .npmrc -TargetConfig "PathToTheProject\.npmrc`
 npmrcTemplate = `registry=xxx               
always-auth=true`;
installNpmrcAuth = `npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false`
styles = `"styles": [
  "node_modules/@rp_custom_library/appkit-styled-lib/assets/@appkit4/styles/appkit.icon.min.css",
  "node_modules/@rp_custom_library/appkit-styled-lib/assets/css/_appkit-redone.scss"
],`
tailwindInstall = `npm i tailwindcss --save-dev`;
angularAnimations = `npm i @angular/animations`;
ngMaterial = `@import '@angular/cdk/overlay-prebuilt.css'`;
tailwindConfig = `/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    // brand colors
    require('./node_modules/@rp_custom_library/appkit-styled-lib/assets/tailwind-config/rp-brand-colors-tailwind-config')
  ],
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-ngx-button.mjs"
  ]
  // Customizations specific to this project would go here
}
`
htmlStuff = `<html lang="en" data-theme="orange">`;
tailwindModules = `@tailwind base;
@tailwind components;
@tailwind utilities;`
body = `<body class="bg-neutral-100 dark:bg-neutral-900 min-h-screen">`
appComponentDarkModeConstructor = `import { Component } from '@angular/core';
import { NgxLightModeService } from @rp_custom_library/appkit-styled-lib;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private ngxLightModeService: NgxLightModeService
  ){}

  lightMode$: Observable<'light' | 'dark'> =
    this.ngxLightModeService.lightMode.asObservable();

  changeMode(lightMode: 'light' | 'dark') {
    const newLightMode: 'light' | 'dark' =
      lightMode === 'dark' ? 'light' : 'dark';
    this.ngxLightModeService.changeLightMode(newLightMode);
    localStorage.setItem('lightMode', lightMode);
  }

}`;

appModuleDarkModeConstructor = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLightModeModule } from '@rp_custom_library/appkit-styled-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [NgxLightModeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
`

appComponentHtmlDarkModeConstructor = `
<ngx-button
  *ngIf="lightMode$ | async as lightMode"
  (click)="changeMode(lightMode)"
  >Change Mode</ngx-button
>`

appComponentThemeModeConstructorTs = `import { Component } from '@angular/core';
import { NgxLightModeService, TAppkitTheme, ThemeService, appkitThemes } from @rp_custom_library/appkit-styled-lib;
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private ngxLightModeService: NgxLightModeService,
    private themeService: ThemeService
  ){}

  theme$ = this.themeService.theme$.pipe(
    tap((theme: TAppkitTheme) => {
      localStorage.setItem('theme', theme);
    })
  )

  activeTheme$: Observable<TAppkitTheme> = this.themeService.theme$.asObservable();
  changeTheme(theme: TAppkitTheme) {
    const index = appkitThemes.findIndex((v) => v === theme);
    let newIndex = index + 1;
    if (newIndex > appkitThemes.length - 1) {
      newIndex = 0;
    }
    this.themeService.setTheme(appkitThemes[newIndex]);
  }
}
`;
browserAnimation = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`

installLibraryNpmPackage = `npm install @rp_custom_library/appkit-styled-lib@5.0.0-beta.2`

appComponentThemeModeConstructorHtml = `<ng-container *ngIf="activeTheme$ | async as activeTheme">
  <ngx-button variation='tertiary' (click)="changeTheme(activeTheme)">
    <brand-palette-icon></brand-palette-icon>
    <span class="ms-2">Change color</span>
  </ngx-button>
</ng-container>
<div class="w-80 h-80 bg-primary"></div>`;

  states = [
    'collapse',
    'collapse',
    'collapse',
    'collapse',
    'collapse',
    'collapse',
    'collapse',
    'collapse',
    'collapse'
  ]
  optionalStates = [
    'collapse',
    'collapse',
  ]
  stateChange(state: 'expand' | 'collapse', index: number) {
    this.states[index] = state;
  }
  optionalStateChange(state: 'expand' | 'collapse', index: number) {
    this.optionalStates[index] = state;
  }
}
