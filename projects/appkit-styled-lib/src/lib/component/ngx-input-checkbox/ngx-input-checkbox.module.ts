import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputCheckboxComponent } from './ngx-input-checkbox.component';

@NgModule({
  declarations: [NgxInputCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgxInputCheckboxComponent]
})
export class NgxInputCheckboxModule {}
