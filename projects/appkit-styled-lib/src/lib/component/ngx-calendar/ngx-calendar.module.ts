import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCalendarComponent } from './ngx-calendar.component';
import { NgxCalendarMonthComponent } from './ngx-calendar-month/ngx-calendar-month.component';
import { NgxCalendarRangeSelectionComponent } from './ngx-calendar-range-selection/ngx-calendar-range-selection.component';
import { NgxCalendarTopControlsComponent } from './ngx-calendar-top-controls/ngx-calendar-top-controls.component';
import { YearSelectionComponent } from './year-selection/year-selection.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button';
import { MonthSelectionComponent } from './month-selection/month-selection.component';
import { NgxCalendarNewSelectionComponent } from './ngx-calendar-new-selection/ngx-calendar-new-selection.component';

@NgModule({
  declarations: [
    NgxCalendarComponent,
    NgxCalendarMonthComponent,
    NgxCalendarRangeSelectionComponent,
    NgxCalendarTopControlsComponent,
    YearSelectionComponent,
    MonthSelectionComponent,
    NgxCalendarNewSelectionComponent,
  ],
  imports: [CommonModule, OverlayModule,NgxButtonModule],
  exports: [
    NgxCalendarComponent,
    NgxCalendarMonthComponent,
    NgxCalendarRangeSelectionComponent,
    NgxCalendarTopControlsComponent,
    YearSelectionComponent
  ]
})
export class NgxCalendarModule {}
