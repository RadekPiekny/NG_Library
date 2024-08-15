import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DarkModeComponent } from './dark-mode.component';

@NgModule({
  declarations: [DarkModeComponent],
  imports: [CommonModule],
  exports: [DarkModeComponent]
})
export class DarkModeModule {}
