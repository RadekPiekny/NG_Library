import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlBaseComponent } from './form-control-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormControlBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlBaseComponent
  ]
})
export class FormControlBaseModule { }
