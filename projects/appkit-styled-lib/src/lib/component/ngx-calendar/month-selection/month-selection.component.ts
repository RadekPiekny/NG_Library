import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IMonth, monthList } from '../ngx-calendar.model';

@Component({
  selector: 'month-selection',
  templateUrl: './month-selection.component.html',
  styleUrls: ['./month-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectionComponent {
  @Input() selectedMonth: number = new Date().getMonth() + 1;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() close: EventEmitter<null> = new EventEmitter<null>();
  monthList: IMonth[] = monthList;

  change(month:IMonth) {
    this.valueChange.emit(month.number);
    this.close.emit();
  }
}
