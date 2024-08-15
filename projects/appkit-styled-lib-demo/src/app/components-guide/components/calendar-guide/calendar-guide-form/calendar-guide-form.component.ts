import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GuideFormBaseComponent } from '../../guide-form-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { CalendarGuideForm } from '../calendar-guide.model';
import { createNewFormControlState } from '../../../form-controls/form-control.model';

@Component({
  selector: 'calendar-guide-form',
  templateUrl: './calendar-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarGuideFormComponent extends GuideFormBaseComponent {
    @Input() form: FormGroup<ToFormGroup<CalendarGuideForm>>;
    @Output() formChange = new EventEmitter<Partial<CalendarGuideForm>>();
    baseForm = createNewFormControlState();

}
