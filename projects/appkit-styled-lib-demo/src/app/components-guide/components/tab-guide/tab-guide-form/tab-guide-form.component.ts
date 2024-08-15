import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { TabGuideForm, tabVariations } from '../tab-guide.model';
import { FormGroup } from '@angular/forms';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'tab-guide-form',
  templateUrl: './tab-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGuideFormComponent extends GuideFormBaseComponent {}
