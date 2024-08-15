import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToggleGuideForm } from '../toggle-guide.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'toggle-guide-form',
  templateUrl: './toggle-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleGuideFormComponent extends GuideFormBaseComponent {}
