import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideFormBaseComponent } from '../../guide-form-base.component';

@Component({
  selector: 'menu-container-guide-form',
  templateUrl: './menu-container-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuContainerGuideFormComponent extends GuideFormBaseComponent {}
