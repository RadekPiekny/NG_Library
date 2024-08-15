import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxLightModeService {
  lightMode: BehaviorSubject<any>;
  defaultDdelay = 500;

  constructor() {
    document.body.classList.add('initiation');
    let lightMode: string;

    setTimeout(() => {
      document.body.classList.remove('initiation');
    }, this.defaultDdelay);

    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        lightMode = 'dark';
        this.setLightMode('dark', 0);
      } else {
        lightMode = 'light';
        this.setLightMode('light', 0);
      }
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          if (e.matches) {
            this.setLightMode('dark', this.defaultDdelay);
          } else {
            this.setLightMode('light', this.defaultDdelay);
          }
        });
    } else {
      lightMode = 'light';
      this.setLightMode('light', 0);
    }
    this.lightMode = new BehaviorSubject<any>(lightMode);
  }

  setLightMode = (theme: 'light' | 'dark', delay: number) => {
    if (this.lightMode) {
      this.lightMode.next(theme);
    }
    if (delay) {
      setTimeout(() => {
        this.changeLightMode(theme);
      }, delay);
      return;
    }
    this.changeLightMode(theme);
  };

  changeLightMode = (theme: 'light' | 'dark') => {
    if (this.lightMode) {
      this.lightMode.next(theme);
    }
    document.documentElement.setAttribute('data-mode', theme);
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.classList.add(theme);
  };
}
