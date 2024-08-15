import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxLightModeService } from '@rp_custom_library/appkit-styled-lib/src/lib/service/light-mode';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() darkModeColor = 'rgb(40,40,40)';
  @Input() lightModeColor = 'rgb(255,255,255)';
  @Input() defaultDdelay = 500;

  completeURL: string;
  dayNightChangeCount = 0;

  constructor(private ngxLightModeService: NgxLightModeService) {
    this.completeURL = window.location.href;
  }

  lightMode$: Observable<'light' | 'dark'> = this.ngxLightModeService.lightMode
    .asObservable()
    .pipe(tap((d) => this.dayNightChangeCount++));

  changeMode(lightMode: 'light' | 'dark') {
    const newLightMode: 'light' | 'dark' =
      lightMode === 'dark' ? 'light' : 'dark';
    this.ngxLightModeService.changeLightMode(newLightMode);
    localStorage.setItem('lightMode', lightMode);
  }
}
