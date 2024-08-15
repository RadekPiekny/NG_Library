import { Component } from '@angular/core';
import { NgxLightModeService, ThemeService } from '@rp_custom_library/appkit-styled-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private themeService: ThemeService,
    private ngxLightModeService: NgxLightModeService,
  ){}

}
