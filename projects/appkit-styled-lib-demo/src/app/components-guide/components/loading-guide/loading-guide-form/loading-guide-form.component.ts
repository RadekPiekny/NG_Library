import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';
import { LoadingGuideForm } from '../loading-guide.model';

@Component({
  selector: 'loading-guide-form',
  templateUrl: './loading-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<LoadingGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<LoadingGuideForm>>();
}
