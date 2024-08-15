import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAvatarComponent } from './ngx-avatar-single/ngx-avatar.component';
import { NgxAvatarGroupComponent } from './ngx-avatar-group/ngx-avatar-group.component';

@NgModule({
  declarations: [
    NgxAvatarComponent,
    NgxAvatarGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxAvatarComponent, 
    NgxAvatarGroupComponent
  ]
})
export class NgxAvatarModule { }
