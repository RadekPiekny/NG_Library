import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiExamplesRoutingModule } from './ui-examples-routing.module';
import { Dashboard1Component } from './dashboard-1/dashboard-1.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [Dashboard1Component],
  imports: [CommonModule, UiExamplesRoutingModule, CoreModule]
})
export class UiExamplesModule {}
