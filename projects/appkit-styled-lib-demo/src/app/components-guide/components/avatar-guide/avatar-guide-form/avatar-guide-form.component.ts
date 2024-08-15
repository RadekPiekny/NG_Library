import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AvatarGuideForm } from '../avatar-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'avatar-guide-form',
  templateUrl: './avatar-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGuideFormComponent extends GuideFormBaseComponent {}
