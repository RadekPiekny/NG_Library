import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { CheckboxGuideForm } from '../checkbox-guide.model';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { createNewFormControlState } from '../../form-control.model';

@Component({
  selector: 'input-checkbox-guide-form',
  templateUrl: './input-checkbox-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<CheckboxGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<CheckboxGuideForm>>();
  baseForm = createNewFormControlState();
}
