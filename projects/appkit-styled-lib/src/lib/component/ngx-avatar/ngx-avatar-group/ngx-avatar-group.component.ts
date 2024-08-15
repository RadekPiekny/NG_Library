import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxAvatarComponent } from '../public-api';

@Component({
  selector: 'ngx-avatar-group',
  templateUrl: './ngx-avatar-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAvatarGroupComponent implements AfterContentInit {

  @ContentChildren(NgxAvatarComponent) avatars!: QueryList<NgxAvatarComponent>;

  _compact: boolean = false;
  @Input() set compact(v: boolean | '') {
    this._compact = v === '' ? true : v;
  }

  ngAfterContentInit(): void {
    if(this.avatars.length >= 1) {
      if(this._compact) {
        [...this.avatars].forEach(next => {
          next._compact = true;
        });
      }
      [...this.avatars].forEach((next, i) => {
        if(i !== 0) {
          next._isGroup = true;
          next.cdr.detectChanges();
        }
      });
    }
  }
  
}
