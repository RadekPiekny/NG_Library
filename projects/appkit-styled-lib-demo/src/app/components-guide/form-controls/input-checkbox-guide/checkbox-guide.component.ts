import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { componentData } from './component-data';
import { ControlsOf, ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { CheckboxGuideForm } from './checkbox-guide.model';
import { buildTailwindImports, codeState, createNewFormControlState, defaultState } from '../form-control.model';
import { componentProperties } from '../../components/component-properties-model';
import { input_CheckboxData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-checkbox/input-checkbox-properties';

@Component({
  selector: 'app-checkbox-guide',
  templateUrl: './checkbox-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGuideComponent extends GuideBaseComponent {

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: ``
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxInputCheckboxModule } from '@rp_custom_library/appkit-styled-lib;`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-input-checkbox')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.formChange();
    this.ngx_input_checkboxData = input_CheckboxData
  }

  ngx_input_checkboxData: componentProperties[];

  form: FormGroup<ControlsOf<CheckboxGuideForm>> = new FormGroup<ControlsOf<CheckboxGuideForm>>({
    indeterminate: new FormControl(false),
    checked: new FormControl(false),
    label: new FormControl('checkbox input'),
    general: this.formState.general
  })

  valueChange(checked: boolean) {
    this.form.controls.checked.patchValue(checked);
  }

  formChange(e?: any) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    const indeterminate = !!this.form?.value?.indeterminate;
    const statef = this.form?.value?.general?.state;
    let state;
    if (statef) {
      state = codeState(statef);
    } else {
      state = '';
    }
    componentCode[0].code.text = `<ngx-checkbox [checked]="${this.form.value.checked}" label="${this.form.value.label}"${this.codeIndeterminateChange(indeterminate)}${state}></ngx-checkbox>`
    this.componentCode = componentCode;
  }

  codeIndeterminateChange(v: boolean): string {
    if (v) {
        return ` "[Indeterminate]="true"`;
    }
    return ``
  }

}
