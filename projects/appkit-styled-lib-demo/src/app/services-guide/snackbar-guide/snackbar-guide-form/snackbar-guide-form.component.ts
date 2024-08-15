import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GuideFormBaseComponent } from '../../../components-guide/components/guide-form-base.component';
import { ToFormGroup } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { SnackbarGuideForm } from '../snackbar-guide.model';
import { FormGroup } from '@angular/forms';
import { ISnackBarType } from '@rp_custom_library/appkit-styled-lib/src/lib/model/snack-bar/snack-bar.model';

@Component({
  selector: 'snackbar-guide-form',
  templateUrl: './snackbar-guide-form.component.html'
})
export class SnackbarGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<SnackbarGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<SnackbarGuideForm>>();
  snackType = ISnackBarType;
  fff() {
    this.snackType.Error
  }
}
