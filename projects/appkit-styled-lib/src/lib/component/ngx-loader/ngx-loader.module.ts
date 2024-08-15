import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoaderComponent } from './ngx-loader/ngx-loader.component';
import { NgxLoaderCircComponent } from './ngx-loader-circ/ngx-loader-circ.component';
import { NgxLoaderLineComponent } from './ngx-laoder-line/ngx-loader-line.component';



@NgModule({
  declarations: [
    NgxLoaderComponent,
    NgxLoaderCircComponent,
    NgxLoaderLineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxLoaderComponent,
    NgxLoaderCircComponent
  ]
})
export class NgxLoaderModule { }
