import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { buildTailwindImports, buildTailwindMultipleImports, htmlBuild } from '../form-control.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { InputDateGuideForm } from './input-date-guide.model';
import { componentData } from './component-data';
import { componentProperties } from '../../components/component-properties-model';
import { form_field_baseDate } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base/form-field-base-properties';
import { input_dateData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-date/ngx-input-date-properties';

@Component({
  selector: 'input-date-guide',
  templateUrl: './input-date-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateGuideComponent extends GuideBaseComponent implements OnInit {

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
          text: `import { NgxInputDateModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-input-date','ngx-tooltip','ngx-button','ngx-input-autoDate'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_input_dateData = input_dateData;
    this.allInputData = [...this.ngx_input_dateData,...form_field_baseDate]
  }

  allInputData = [];
  ngx_input_dateData: componentProperties[];
  form_field_baseData: componentProperties[] = form_field_baseDate;

  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as InputDateGuideForm);
    })
    this.formChange(this.form.value as InputDateGuideForm)
  }

  form: FormGroup<ControlsOf<InputDateGuideForm>> = new FormGroup<ControlsOf<InputDateGuideForm>>({
    label: new FormControl('Date'),
    leftIcon: new FormControl(''),
    placeholder: new FormControl(''),
    value: new FormControl(null),
    general: this.formState.general,
    size: new FormControl('s'),
    format: new FormControl('DD/MM/YYYY',{updateOn: 'blur'}),
    disableFrom: new FormControl(null),
    disableTo: new FormControl(null),
    disableRange: new FormControl(null),
    reset: new FormControl(true),
  })

  valueChange(val: any) {
    this.test = val;
    this.form.controls.value.patchValue(val,{ emitEvent: false });
  }

  formChange(e: InputDateGuideForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(e,'ngx-input-date');
    this.componentCode = componentCode;
  }

  leftIconChange(): string {
    if (this.form.value.leftIcon) {
        return `\n  [leftIcon]="${this.form.value.leftIcon}"`;
    }
    return ``
  }

  test;
}
