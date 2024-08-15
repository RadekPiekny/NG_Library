import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { createNewFormControlState } from '../../form-control.model';
import { InputTextGuideForm } from '../input-text-guide.model';
import { appkitIconOutline } from 'rp_custom_library/src/public-api';

@Component({
  selector: 'input-text-guide-form',
  templateUrl: './input-text-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<InputTextGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<InputTextGuideForm>>();
  baseForm = createNewFormControlState();

  appkitIconOutline = appkitIconOutline;

  changeSize(size: 's' | 'xs' | 'm') {
    this.form.controls.size.patchValue(size);
  }
}
