import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgxBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

@NgModule({
  declarations: [
    NgxBreadcrumbComponent, 
    NgxBreadcrumbItemComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NgxBreadcrumbComponent,
    NgxBreadcrumbItemComponent
  ]
})
export class NgxBreadcrumbModule {}
