import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import { NgxBreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'ngx-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBreadcrumbComponent implements AfterViewInit {

  @ContentChildren(NgxBreadcrumbItemComponent)
  items!: QueryList<NgxBreadcrumbItemComponent>;
  itemsArr: NgxBreadcrumbItemComponent[] = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.refreshItems();
  }

  refreshItems() {
    if (this.items.toArray().length) {
      this.itemsArr = [...this.items];
    };
    if (this.items?.length) {
      this.itemsArr[this.items.length - 1].isLast = true;
      this.cdr.detectChanges();
    }
  }

}
