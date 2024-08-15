import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { defaultPosition, primaryColors, secondaryColors } from './config';

@Component({
  selector: 'ngx-color-picker',
  templateUrl: './ngx-color-picker.component.html',
  styleUrls: ['./ngx-color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxColorPickerComponent {
  showColorPicker = false;
  overlayPosition = defaultPosition;
  @Input() primaryColors: any[] = primaryColors;
  @Input() secondaryColors: any[] = secondaryColors;
  @Input()
  selectionColor!: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter();

  toggleShowColorPicker(event: MouseEvent): void {
    event.stopPropagation();
    this.showColorPicker = !this.showColorPicker;
  }

  changeColor(color: string): void {
    this.colorChange.emit(color);
    this.showColorPicker = false;
  }

  hideColorList(): void {
    this.showColorPicker = false;
  }
}
