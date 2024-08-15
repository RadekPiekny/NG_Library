import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-stepper',
  templateUrl: './ngx-stepper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxStepperComponent {
  @Input() direction: 'vertical' | 'horizontal';
  @Output() changeVal = new EventEmitter<any>();
}
