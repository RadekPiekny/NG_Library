import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllThemes, IColorBrand, TThemeColor, themes, themesBase } from './color';

@Component({
  selector: 'rp-color-picker',
  templateUrl: './appkit-color-picker.component.html',
  styleUrls: ['./appkit-color-picker.component.scss']
})
export class AppkitColorPickerComponent implements OnInit {
  ngOnInit(): void {
    switch (this.types.length) {
      case 1:
        this.colorHeight = 'h-12';
        break;
      case 2:
        this.colorHeight = 'h-8';
        break;
      default:
        this.colorHeight = 'h-4';
        break;
    }
  }

  //
  @Input() tints: number[] = [100,200,300,400,500,600,700,800,900];
  @Input() types: any[] = [...themes,themesBase];
  _selectedType!: string;
  _selectedTint!: number;
  colorHeight: string = 'h4';

  pick(type: any, tint: number) {
    this._selectedType = type;
    this._selectedTint = tint;
    this.colorChange.emit({
      type,tint
    })
  }

  @Output() colorChange: EventEmitter<IColorBrand> = new EventEmitter<IColorBrand>();
}
