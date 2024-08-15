import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { TextareaGuideForm } from '../../textarea-guide.model';
import { GuideFormBaseComponent } from '../../../../components/guide-form-base.component';

@Component({
  selector: 'textarea-guide-form',
  templateUrl: './textarea-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaGuideFormComponent extends GuideFormBaseComponent {

  @Input() form: FormGroup<ToFormGroup<TextareaGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<TextareaGuideForm>>();

}
