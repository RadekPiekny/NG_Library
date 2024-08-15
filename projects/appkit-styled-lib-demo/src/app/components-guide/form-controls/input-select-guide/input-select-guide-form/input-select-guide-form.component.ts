import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { createNewFormControlState } from '../../form-control.model';
import { InputSelectGuideForm } from '../input-select-guide.model';
import { appkitIconOutline } from 'rp_custom_library/src/public-api';

@Component({
  selector: 'input-select-guide-form',
  templateUrl: './input-select-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSelectGuideFormComponent extends GuideFormBaseComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    super()
  }
  @Input() form: FormGroup<ToFormGroup<InputSelectGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<InputSelectGuideForm>>();
  baseForm = createNewFormControlState();

  appkitIconOutline = appkitIconOutline;

  changeSize(size: 's' | 'sm' | 'xs' | 'm') {
    this.form.controls.size.patchValue(size);
  }

  changeToMulti(multi: boolean) {

    this.form.controls.multi.patchValue(multi);
    setTimeout(() => {      
      if (multi) {      
        this.form.controls.value.patchValue([this.form.value.value]);
      } else {
        this.form.controls.value.patchValue(null);
      }
    });

  }

  reset() {
    if (this.form.value.multi) {
      this.form.controls.value.patchValue([])
    } else {
      this.form.controls.value.patchValue(null);
    }
    this.cdr.detectChanges();
  }
}
