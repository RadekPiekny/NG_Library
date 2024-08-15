import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputRichTextGuideForm } from '../rich-text-model';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { createNewFormControlState } from '../../form-control.model';

@Component({
  selector: 'rich-text-guide-form',
  templateUrl: './rich-text-guide-form.component.html'
})
export class RichTextGuideFormComponent {
  @Input() form: FormGroup<ToFormGroup<InputRichTextGuideForm>>;
  @Output() formChange = new EventEmitter<Partial<InputRichTextGuideForm>>();
  baseForm = createNewFormControlState();
}
