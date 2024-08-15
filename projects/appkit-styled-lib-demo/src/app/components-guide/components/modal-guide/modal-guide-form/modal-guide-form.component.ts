import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalGuideForm } from '../modal-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'modal-guide-form',
  templateUrl: './modal-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalGuideFormComponent extends GuideFormBaseComponent {}
