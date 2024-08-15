import { Component } from '@angular/core';
import { NgxStepperStatus } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-stepper';

@Component({
  selector: 'app-stepper-guide',
  templateUrl: './stepper-guide.component.html',
  styleUrls: ['./stepper-guide.component.scss']
})
export class StepperGuideComponent {
  statusEnum = NgxStepperStatus;
  status: NgxStepperStatus;

  changeStatus() {
    if (this.status === NgxStepperStatus.Normal) {
      this.status = NgxStepperStatus.Warning;
    } else {
      this.status = NgxStepperStatus.Normal;
    }
  }

  changeOfVertical(e: any) {

  }
}
