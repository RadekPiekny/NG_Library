import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GuideFormBaseComponent } from '../../guide-form-base.component';
import { SliderGuideForm } from '../slider-guide.model';

@Component({
  selector: 'slider-guide-form',
  templateUrl: './slider-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderGuideFormComponent extends GuideFormBaseComponent {}
