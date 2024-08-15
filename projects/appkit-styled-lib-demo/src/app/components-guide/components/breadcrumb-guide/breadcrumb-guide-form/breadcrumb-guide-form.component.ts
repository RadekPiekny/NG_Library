import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'breadcrumb-guide-form',
  templateUrl: './breadcrumb-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbGuideFormComponent extends GuideFormBaseComponent {}
