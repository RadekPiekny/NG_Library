import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTableComponent implements AfterViewChecked {

  title: boolean = true;
  @Input() striped: boolean = false;
  @Input() checkbox: boolean = false;
  @Input() condensed: boolean = false;

  @ViewChildren('table')
  table!: QueryList<any>;

  constructor(private cdr: ChangeDetectorRef) {

  }

  tbodyClass: string = "border-spacing-1";
  tbodyRowClass: string = "hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-all";
  
  thead = {
    th: "text-left p-3 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all"
  };

  tbody = {
    tr: "hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-all",
    trStriped: " odd:bg-neutral-50 dark:odd:bg-neutral-700",
    td: "text-left p-3 h-fit first:rounded-l last:rounded-r"
  };

  ngAfterViewChecked() {
    this.addTableClasses();
  }

  addTableClasses() {
    let tabEl = this.table.first.nativeElement.children;
    if (tabEl[0].nodeName === "THEAD"){
      this.title = true;
    } else {
      this.title = false;
    }
    let tabHeads;
    let tabData;
    
    if(this.title) {
      tabHeads = [...tabEl[0].children[0].children];
      tabData = [...tabEl];
      tabData.shift();
      tabHeads.forEach(th => {
        th.classList = this.thead.th;
      });
    } else {
      tabData = [...tabEl];
    }
    if(this.striped){
      tabData.forEach(tbodies => {
        [...tbodies.children].forEach(tr => {
          tr.classList = this.tbody.tr + this.tbody.trStriped;
          let td = [...tr.children];
          if(!this.condensed) {
            td.forEach(tdi => {
              if(tdi.nodeName === "TH") {
                tdi.classList = this.thead.th;
                tdi.parentNode.classList = "";
              } else {
                tdi.classList = this.tbody.td;
              }
            });
          } else {
            td.forEach(tdi => {
              if(tdi.nodeName === "TH") {
                tdi.classList = this.thead.th;
                tdi.parentNode.classList = "";
              } else {
                tdi.classList = this.tbody.td + " !py-1";
              }
            });
          }
        });
        
      });
    } else {
      tabData.forEach(tbodies => {
        [...tbodies.children].forEach(tr => {
          tr.classList = this.tbody.tr;
          let td = [...tr.children];
          if(!this.condensed) {
            td.forEach(tdi => {
              if(tdi.nodeName === "TH") {
                tdi.classList = this.thead.th;
                tdi.parentNode.classList = "";
              } else {
                tdi.classList = this.tbody.td;
              }
            });
          } else {
            td.forEach(tdi => {
              if(tdi.nodeName === "TH") {
                tdi.classList = this.thead.th;
                tdi.parentNode.classList = "";
              } else {
                tdi.classList = this.tbody.td + " !py-1";
              }
            });
          }
        });
        
      });
    }
  }

}
