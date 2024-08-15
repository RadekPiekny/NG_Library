import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownCircleComponent } from './countdown-circle.component';

@NgModule({
  declarations: [CountdownCircleComponent],
  imports: [CommonModule],
  exports: [CountdownCircleComponent]
})
export class CountdownCircleModule {}
