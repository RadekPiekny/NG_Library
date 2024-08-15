import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { InputTextGuideForm } from './input-text-guide.model';
import { componentData } from './component-data';
import { buildTailwindImports, buildTailwindMultipleImports, codeState, htmlBuild } from '../form-control.model';
import { componentProperties } from '../../components/component-properties-model';
import { form_field_baseDate } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base/form-field-base-properties';
import { input_textData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-text/ngx-input-text-properties';

@Component({
  selector: 'input-text-guide',
  templateUrl: './input-text-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextGuideComponent extends GuideBaseComponent implements OnInit {
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
          text: `import { NgxInputTextModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-input-text','ngx-button'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.form_field_baseData = form_field_baseDate;
    this.ngx_input_textData = input_textData;
    this.allPropertyData = [...this.form_field_baseData, ...this.ngx_input_textData]
  }

  form_field_baseData: componentProperties[];
  ngx_input_textData: componentProperties[];
  allPropertyData: componentProperties[];
  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as InputTextGuideForm);
    })
    this.formChange(this.form.value as InputTextGuideForm)
  }

  form: FormGroup<ControlsOf<InputTextGuideForm>> = new FormGroup<ControlsOf<InputTextGuideForm>>({
    label: new FormControl('Text input'),
    leftIcon: new FormControl(''),
    placeholder: new FormControl(''),
    value: new FormControl('Value of the input'),
    general: this.formState.general,
    maxlength: new FormControl(null),
    size: new FormControl('m'),
    reset: new FormControl(false),
    focus: new FormControl(null),
  })

  valueChange(val: any) {
    this.form.controls.value.patchValue(val);
  }

  formChange(e: InputTextGuideForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(e,'ngx-input-text');
    this.componentCode = componentCode;
  }

  leftIconChange(): string {
    if (this.form.value.leftIcon) {
        return `\n  [leftIcon]="${this.form.value.leftIcon}"`;
    }
    return ``
  }

}
