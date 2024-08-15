import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccordionGuideForm } from '../accordion-guide.model';
import { GuideFormBaseComponent } from '../../guide-form-base.component';
import { appkitIconOutline } from 'rp_custom_library/src/public-api';

@Component({
  selector: 'accordion-guide-form',
  templateUrl: './accordion-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGuideFormComponent extends GuideFormBaseComponent {

  appkitIconOutline = appkitIconOutline;

}
