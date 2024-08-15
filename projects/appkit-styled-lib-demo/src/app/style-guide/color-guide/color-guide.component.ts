import { Component } from '@angular/core';

@Component({
  selector: 'color-guide',
  templateUrl: './color-guide.component.html',
})
export class ColorGuideComponent {

  tints: number[] = [100,200,300,400,500,600,700,800,900];
  types = [
    {name: 'blue', primaryTint: 400},
    {name: 'orange', primaryTint: 500},
    {name: 'red', primaryTint: 500},
    {name: 'teal', primaryTint: 700},
    {name: 'black', primaryTint: 600},
    {name: 'pink', primaryTint: 500},
  ];

  statusTypes = [
    {name: 'positive', primaryTint: 500},
    {name: 'negative', primaryTint: 500},
    {name: 'warning', primaryTint: 500},
  ]

  lightenType(type: any, tint: number): boolean {
      if (type.primaryTint === tint) {
        return true
      } else {
        return false
      }
  }

  lightenTypePrimary(tint: number): boolean {
    const currentPrimary: string = document.documentElement.getAttribute('data-theme');
    const primaryTint = this.types.find(t => t.name === currentPrimary).primaryTint;
    if (tint === primaryTint) {
      return true
    } else {
      return false
    }
  }

  saturation: string[] = ['-lighten-200','-lighten-100', '', '-darken-100', '-darken-200']
}