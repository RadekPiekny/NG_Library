import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BadgeGuideForm, BadgeSentiment, badgeSentiments } from '../badge-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'badge-guide-form',
  templateUrl: './badge-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeGuideFormComponent extends GuideFormBaseComponent {

  @Input() form: FormGroup<ToFormGroup<BadgeGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<BadgeGuideForm>>();
  badgeSentiments = badgeSentiments;
  
}