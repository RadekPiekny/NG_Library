import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, EventType, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import {
  NgxLightModeService,
  NgxPopUpService,
  ThemeService
} from 'rp_custom_library/src/public-api';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { textColorMatchingBackgroundTwResult } from '../../../appkit-styled-lib/assets/tailwind-config/plugins/generate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ngxLightModeService: NgxLightModeService,
    private themeService: ThemeService,
    private hljsLoader: HighlightLoader,
    private ngxPopUpService: NgxPopUpService,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.ngxPopUpService.viewContainerRef = this.viewContainerRef;
    // generate values for \projects\appkit-styled-lib\assets\tailwind-config\plugins\text-color-matching-background.tw.plugin.js
    // it does not work when just using some js inside the plugin for some reason
    // const xx = textColorMatchingBackgroundTwResult;
    // at the moment we just run npm run demo and then get values from console log and paste it into the plugin
    // not great not terrible
  }

  $route: Observable<any> = this.router.events.pipe(
    filter((event) => {
      return event.type === EventType.NavigationEnd
    }),
    map((e: any) => (e as NavigationEnd).url)
  );

  changeMode(mode: 'light' | 'dark') {
    this.ngxLightModeService.changeLightMode(mode);
    this.hljsLoader.setTheme(mode === 'dark' ? 'assets/styles/solarized-dark.css' : 'assets/styles/solarized-light.css');
  }

  changeTheme(theme: any) {
    this.themeService.setTheme(theme);
  }

  links = [
    {name: 'avatar', route: './components/avatar-guide' },
    {name: 'badge', route: './components/badge-guide' },
    {name: 'button', route: './components/button-guide' },
    {name: 'modal', route: './components/modal-guide' },
    {name: 'tab', route: './components/tab-guide'},
    {name: 'breadcrumb', route: './components/breadcrumb-guide'},
    {name: 'tooltip', route: './components/tooltip-guide'},
    {name: 'input text', route: './components/input-text-guide'},
    {name: 'input select', route: './components/input-select-guide'},
    {name: 'input file', route: './components/input-file-guide'},
    {name: 'input checkbox', route: './components/checkbox-guide' },
    {name: 'input radio', route: './components/input-radio-guide'},
    {name: 'input date', route: './components/input-date-guide'},
    {name: 'input ratio slider', route: './components/input-ratio-guide'},
    {name: 'pagination', route: './components/pagination-guide'},
    {name: 'loading', route: './components/loading-guide'},
    {name: 'calendar', route: './components/calendar-guide'},
    {name: 'toggle', route: './components/toggle-guide'},
    {name: 'accordion', route: './components/accordion-guide'},
    {name: 'textarea', route: './components/textarea-guide'},
    //{name: 'banner XX', route: './components/banner-guide'},
    {name: 'slider', route: './components/slider-guide'},
    //{name: 'table XX', route: './components/table-guide'},
    //{name: 'stepper XX', route: './components/stepper-guide'},
    {name: 'rich text', route: './components/rich-text-guide'},
    {name: 'logo', route: './components/logo-guide'},
    {name: 'logo-text', route: './components/logo-text-guide'},
    {name: 'menu-container', route: './components/menu-container-guide'}

    
  ].sort((a, b) => {
    const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive comparison
    const nameB = b.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // Names are equal
    return 0;
  });

  styles = [
    {name: 'colors', route: './style/colors'},
  ]

  services = [
    {name: 'snack-bar', route: './services/snackbar'},
  ]

  commonPatterns = [
    {name: 'loading indication', route: './common-patterns/loading-indication'},
  ]

  componentSnippets = [
    {name: 'form-guide', route: './composite-snippets/form-guide'},
    {name: 'banner', route: './composite-snippets/banner'},
    //{name: 'test', route: './composite-snippets/test'},
  ]

  welcome = [
    { name : 'getting started', route: './Welcome/getting-started'},
    { name : 'installation', route: './Welcome/installation'}
  ]


}
