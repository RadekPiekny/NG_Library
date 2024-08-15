import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { InputRadioGuideForm } from '../input-radio-guide.model';
import { createNewFormControlState } from '../../form-control.model';

@Component({
  selector: 'input-radio-guide-form',
  templateUrl: './input-radio-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRadioGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<InputRadioGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<InputRadioGuideForm>>();
  baseForm = createNewFormControlState();
}
