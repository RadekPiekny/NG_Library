import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  appkitThemes,
  TAppkitTheme,
  ThemeService
} from '@rp_custom_library/appkit-styled-lib/src/lib/service/theme';

@Component({
  selector: 'theme-picker',
  templateUrl: './appkit-theme-picker.component.html',
  styleUrls: ['./appkit-theme-picker.component.scss']
})
export class AppkitThemePickerComponent {
  constructor(private themeService: ThemeService) {}

  appkitThemes = appkitThemes;

  changeTheme(theme: TAppkitTheme) {
    const index = this.appkitThemes.findIndex((v) => v === theme);
    let newIndex = index + 1;
    if (newIndex > this.appkitThemes.length - 1) {
      newIndex = 0;
    }
    this.themeService.setTheme(this.appkitThemes[newIndex]);
  }

  activeTheme$: Observable<TAppkitTheme> =
    this.themeService.theme$.asObservable();
}
