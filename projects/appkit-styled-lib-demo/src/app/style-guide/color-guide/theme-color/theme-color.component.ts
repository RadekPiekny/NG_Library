import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-color',
  templateUrl: './theme-color.component.html'
})
export class ThemeColorComponent {
  @Input() color: string;
}
