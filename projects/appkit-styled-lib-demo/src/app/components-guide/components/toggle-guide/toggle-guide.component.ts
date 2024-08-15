import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { ToggleGuideForm } from './toggle-guide.model';
import { buildTailwindImports, htmlBuild } from '../../form-controls/form-control.model';
import { componentProperties } from '../component-properties-model';
import { form_control_baseData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base/form-control-base-properies';
import { toggleData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-toggle/ngx-toogle-properties';

@Component({
  selector: 'toggle-guide',
  templateUrl: './toggle-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleGuideComponent extends GuideBaseComponent {

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: htmlBuild({ id: "id", indicator: "false", label: '' }, 'ngx-toggle')
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxToggleModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: buildTailwindImports('ngx-toggle')
        },
        label: 'Tailwind config',
        active: false
      }
    ];
    this.form_control_baseData = form_control_baseData;
    this.ngx_toogleData = toggleData;
    this.allPropertiesData = [...this.ngx_toogleData, ...this.form_control_baseData];
  }

  form_control_baseData: componentProperties[];
  ngx_toogleData: componentProperties[];
  allPropertiesData: componentProperties[];

  form: FormGroup<ToFormGroup<ToggleGuideForm>> = new FormGroup<ToFormGroup<ToggleGuideForm>>({
    indicator: new FormControl(false),
    label: new FormControl(''),
    disabled: new FormControl(false)
  })

  formChange(v: Partial<ToggleGuideForm>) {
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild({ id: "id", indicator: v.indicator, label: v.label }, 'ngx-toggle');
    this.componentCode = componentCode;
  }

}
