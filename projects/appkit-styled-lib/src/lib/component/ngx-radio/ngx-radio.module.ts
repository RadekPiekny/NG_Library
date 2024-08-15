import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRadioComponent } from './ngx-radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxRadioComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgxRadioComponent]
})
export class NgxRadioModule {}
