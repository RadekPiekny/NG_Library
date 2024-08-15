import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { appkitThemes, TAppkitTheme } from './themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes = appkitThemes;
  private theme = this.themes[0];
  theme$: BehaviorSubject<TAppkitTheme> = new BehaviorSubject<TAppkitTheme>(
    this.theme
  );

  constructor() {
    this.setTheme(this.theme);
  }

  setTheme = (theme: TAppkitTheme) => {
    this.theme$.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
  };
}
