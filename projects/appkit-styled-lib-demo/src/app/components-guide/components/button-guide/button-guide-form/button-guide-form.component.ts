import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonGuideForm, ButtonVariation, buttonVariations } from '../button-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'button-guide-form',
  templateUrl: './button-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGuideFormComponent extends GuideFormBaseComponent {

  @Input() form: FormGroup<ToFormGroup<ButtonGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<ButtonGuideForm>>();
  buttonVariations = buttonVariations;

}
