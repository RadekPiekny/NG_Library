import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { generateUniqueId } from '@rp_custom_library/appkit-styled-lib/src/lib/function';
import { NgxTabItemComponent } from './ngx-tab-item/ngx-tab-item.component';

@Component({
  selector: 'ngx-tab, ngx-tab-group',
  templateUrl: './ngx-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTabComponent implements OnDestroy {
  
  _filled: boolean = false;
  @Input() set filled(value: boolean) {
    this._filled = value;
    if (this._filled) {
      this.gap = 'gap-1';
    } else {
      this.gap = 'gap-4'
    }
    this.updateTabs();
  }
  @Input() justifyContent: string = 'justify-start';
  @Input() width: string = 'w-full';
  @Input() gap: string = 'gap-4';
  @Input() underlineTrack: boolean = true;

  subscription: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
  @ContentChildren(NgxTabItemComponent) options:
    | QueryList<NgxTabItemComponent>
    | undefined;

  ngAfterContentInit() {
    this.updateTabs();
    this.options?.forEach((option, i) => {
      const subscribe = option.activeChange.subscribe(() => {
        this.options?.forEach((tab) => {
          tab.active = false;
        });
        option.active = true;
      });
      this.subscription.push(subscribe);
    });
  }

  @Input() groupName: string = generateUniqueId();
  updateTabs() {
    this.options?.forEach((option) => {
      option.filled = this._filled;
      option.groupName = this.groupName;
    });
  }
}
