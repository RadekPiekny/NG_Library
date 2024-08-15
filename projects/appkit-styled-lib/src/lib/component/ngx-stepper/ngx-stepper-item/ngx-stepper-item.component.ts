import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxStepperStatus } from '../ngx-stepper.model';

@Component({
  selector: 'ngx-stepper-item',
  templateUrl: './ngx-stepper-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxStepperItemComponent {
  @Input() status: NgxStepperStatus;
}
