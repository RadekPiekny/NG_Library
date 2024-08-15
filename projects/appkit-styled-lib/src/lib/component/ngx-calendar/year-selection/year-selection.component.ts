import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IMonth, monthList } from '../ngx-calendar.model';

@Component({
  selector: 'calendar-year-selection',
  templateUrl: './year-selection.component.html',
  styleUrls: ['./year-selection.component.scss']
})
export class YearSelectionComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    const middlePosition = this.el.nativeElement.scrollHeight / 2 - this.el.nativeElement.clientHeight / 2;
    this.el.nativeElement.scrollTop = middlePosition;
  }
  
  @Input() selectedYear: number = new Date().getFullYear();
  @Input() yearDifference = 50;
  ngOnInit(): void {
    this.currentYear = this.selectedYear;
    this.yearList = [
      ...this.getYears(this.selectedYear,this.yearDifference,true),
      this.selectedYear,
      ...this.getYears(this.selectedYear,this.yearDifference,false)
    ];
  }

  yearList: number[] = [];

  currentYear: number = new Date().getFullYear();
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() close: EventEmitter<null> = new EventEmitter<null>();
  @ViewChild('el')
  el!: ElementRef<HTMLDivElement>;

  getYears(year: number, count: number, past: boolean = true): number[] {
    const result: number[] = [];
  
    if (count <= 0) {
      return result; // Return an empty array for invalid count
    }
  
    for (let i = 1; i < count+1; i++) {
      if (past) {
        result.push(year - i);
      } else {
        result.push(year + i);
      }
    }
    if (past) {
      return result.reverse();
    }
    return result
  }

  change(year: number) {
    this.valueChange.emit(year);
    this.close.emit();
  }

}
