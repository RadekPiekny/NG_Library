import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-bar-guide',
  templateUrl: './loading-bar-guide.component.html',
  styleUrls: ['./loading-bar-guide.component.scss']
})
export class LoadingBarGuideComponent {
  constructor() {}

  loading = '<div class="loading-bar on"></div>';

  saturationLevels: number[] = [20, 40, 60, 80];
  loadingSaturation: any[] = this.saturationLevels.map((v) => {
    return {
      html: `<div class="loading-bar bar-color-${v} on"></div>`,
      class: `loading-bar bar-color-${v} on`
    };
  });

  speedLevels: string[] = ['slow', ''];
  loadingSpeed: any[] = this.speedLevels.map((v) => {
    return {
      html: `<div class="loading-bar ${v} on"></div>`,
      class: `loading-bar ${v} on`
    };
  });
}
