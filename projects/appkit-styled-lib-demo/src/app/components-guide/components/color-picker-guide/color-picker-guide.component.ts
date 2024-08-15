import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-color-picker-guide',
  templateUrl: './color-picker-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerGuideComponent {

  ttt(c: any) {
    console.log(c);
    this.colorPickerIcon_1 = c;
  }

  colorPickerIcon_1: any;
}
