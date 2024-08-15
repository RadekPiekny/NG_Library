import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControlState, createNewFormControlState, formControlStates, formControlStatesErr, formControlStatesFull } from '../form-control.model';
import { GuideFormBaseComponent } from '../../components/guide-form-base.component';

@Component({
  selector: 'input-base',
  templateUrl: './input-base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputBaseComponent extends GuideFormBaseComponent {
  formControlStates: FormControlState[] = [];
  _err: boolean = false;
  @Input() set err(v: boolean) {
    this._err = v;
    if (this._err) {
      this.formControlStates = formControlStatesFull;
    } else {
      this.formControlStates = formControlStates;
    }
  }; 
  @Input() set readonly(v: boolean) {

  }

}
