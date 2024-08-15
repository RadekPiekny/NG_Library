import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GuideFormBaseComponent } from '../../guide-form-base.component';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { TooltipGuideForm } from '../tooltip-guide.model';

@Component({
  selector: 'tooltip-guide-form',
  templateUrl: './tooltip-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipGuideFormComponent extends GuideFormBaseComponent {}
