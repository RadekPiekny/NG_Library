import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPatternsRoutingModule } from './common-patterns-routing.module';
import { LoadingIndicationComponent } from './loading-indication/loading-indication.component';


@NgModule({
  declarations: [
    LoadingIndicationComponent
  ],
  imports: [
    CommonModule,
    CommonPatternsRoutingModule
  ]
})
export class CommonPatternsModule { }
