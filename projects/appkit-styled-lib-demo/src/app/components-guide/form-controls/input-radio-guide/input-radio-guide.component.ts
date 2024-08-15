import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { InputRadioGuideForm } from './input-radio-guide.model';
import { buildTailwindImports, htmlBuild, htmlInsertNewEl } from '../form-control.model';
import { componentData } from './component-data';
import { componentProperties } from '../../components/component-properties-model';
import { input_radioData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-radio/ngx-radio-properties';

@Component({
  selector: 'input-radio-guide',
  templateUrl: './input-radio-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRadioGuideComponent extends GuideBaseComponent {
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
          text: `import { NgxInputRadioModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-input-radio')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.formChange();
    this.ngx_radioData = input_radioData;
  }

  ngx_radioData: componentProperties[];

  form: FormGroup<ControlsOf<InputRadioGuideForm>> = new FormGroup<ControlsOf<InputRadioGuideForm>>({
    general: this.formState.general
  })

  formChange(e?: any) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    let result: string = `<div class="flex flex-col gap-3"></div>`;
    for (let index = 0; index < 3; index++) {
      let disabled ;
      if(this.form?.value?.general?.state === 'default') {
        disabled = null
      }
      else { 
        disabled = `true`
      }
      result = htmlInsertNewEl(result,{label: `option ${index}`, group: 'radioGroup', value: `val${index}`, disabled},'ngx-input-radio');
    }
    componentCode[0].code.text = result;
    this.componentCode = componentCode;
  }

  codeIndeterminateChange(v: boolean): string {
    if (v) {
        return ` "[Indeterminate]="true"`;
    }
    return ``
  }

  teee(e: any) {
    console.log(e.target.value);
  }

  ngxTeee(e: any) {
    console.log(e);
  }
}
