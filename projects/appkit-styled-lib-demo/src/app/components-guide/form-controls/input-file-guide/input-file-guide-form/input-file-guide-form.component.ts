import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { createNewFormControlState } from '../../form-control.model';
import { FileGuideForm } from '../file-guide.model';
import { appkitIconOutline } from 'rp_custom_library/src/public-api';

@Component({
  selector: 'input-file-guide-form',
  templateUrl: './input-file-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFileGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<FileGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<FileGuideForm>>();
  baseForm = createNewFormControlState();

  appkitIconOutline = appkitIconOutline;

  changeSize(size: 's' | 'xs' | 'm' | 'auto') {
    this.form.controls.size.patchValue(size);
  }
}
