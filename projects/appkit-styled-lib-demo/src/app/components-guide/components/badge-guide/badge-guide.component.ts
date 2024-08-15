import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { BadgeGuideForm, BadgeSentiment } from './badge-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { buildTailwindImports } from '../../form-controls/form-control.model';
import { badge_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-badge/badge-properties';
import { componentProperties } from '../component-properties-model';

@Component({
  selector: 'app-badge-guide',
  templateUrl: './badge-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeGuideComponent extends GuideBaseComponent  {

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: `<ngx-badge [sentiment]="${this.form.value.sentiment}" [filled]="${this.form.value.filled}"  [variation]="${this.form.value.variation}">${this.form.value.text}</ngx-badge>`
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxBadgeModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-badge')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.badge_Data = badge_Data;
  }

  badge_Data: componentProperties[];
  form: FormGroup<ToFormGroup<BadgeGuideForm>> = new FormGroup<ToFormGroup<BadgeGuideForm>>({
    variation: new FormControl('Inline'),
    sentiment: new FormControl(BadgeSentiment.Default),
    filled: new FormControl(false),
    text: new FormControl('Denver')
  })

  formChange(v: Partial<BadgeGuideForm>) {
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = `<ngx-badge [sentiment]="${this.form.value.sentiment}" [filled]="${this.form.value.filled}" [variation]="${this.form.value.variation}">${this.form.value.text}</ngx-badge>`;
    this.componentCode = componentCode;
  }

}