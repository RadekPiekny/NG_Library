import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignRoutingModule } from './material-design-routing.module';
import { MdElevationComponent } from './md-elevation/md-elevation.component';

@NgModule({
  declarations: [MdElevationComponent],
  imports: [CommonModule, MaterialDesignRoutingModule],
  exports: [MdElevationComponent]
})
export class MaterialDesignModule {}
