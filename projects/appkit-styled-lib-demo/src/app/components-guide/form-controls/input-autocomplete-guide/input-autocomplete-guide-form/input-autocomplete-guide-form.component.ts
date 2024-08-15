import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { createNewFormControlState } from '../../form-control.model';
import { InputAutocompleteGuideForm } from '../input-autocomplete-guide.model';
import { appkitIconOutline } from 'rp_custom_library/src/public-api';

@Component({
  selector: 'input-autocomplete-guide-form',
  templateUrl: './input-autocomplete-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAutocompleteGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<InputAutocompleteGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<InputAutocompleteGuideForm>>();
  baseForm = createNewFormControlState();

  appkitIconOutline = appkitIconOutline;

  changeSize(size: 's' | 'xs' | 'm') {
    this.form.controls.size.patchValue(size);
  }
}
