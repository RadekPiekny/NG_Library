import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { createNewFormControlState } from '../../form-control.model';
import { InputDateGuideForm } from '../input-date-guide.model';
import { appkitIconOutline } from 'rp_custom_library/src/public-api';


@Component({
  selector: 'input-date-guide-form',
  templateUrl: './input-date-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<InputDateGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<InputDateGuideForm>>();
  baseForm = createNewFormControlState();

  appkitIconOutline = appkitIconOutline;

  changeSize(size: 's' | 'xs' | 'm' | 'auto') {
    this.form.controls.size.patchValue(size);
  }

  resetDate() {
    this.form.controls.value.reset();
  }
}
