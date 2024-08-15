import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { componentData } from './component-data';
import { buildTailwindImports, buildTailwindMultipleImports, htmlBuild, htmlSelectOptionBuild } from '../form-control.model';
import { InputSelectGuideForm } from './input-select-guide.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { componentProperties } from '../../components/component-properties-model';
import { ngx_optionData, ngx_selectData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-select/ngx-select-properties';
import { form_field_baseDate } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base/form-field-base-properties';

@Component({
  selector: 'input-select-guide',
  templateUrl: './input-select-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSelectGuideComponent extends GuideBaseComponent implements OnInit {
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
          text: `import { NgxSelectModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-select','ngx-input-checkbox','ngx-input-text','ngx-option'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_selectData = ngx_selectData;
    this.ngx_optionData = ngx_optionData;
    this.form_field_baseData = form_field_baseDate;
    this.allSelectPropertyData = [...this.ngx_selectData, ...this.form_field_baseData]
  }

  ngx_selectData: componentProperties[];
  ngx_optionData: componentProperties[];
  form_field_baseData:componentProperties[];
  allSelectPropertyData: componentProperties[];
  activeTab: string = "ngx_selectData"

  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as InputSelectGuideForm);
    })
    this.formChange(this.form.value as InputSelectGuideForm)
  }

  form: FormGroup<ControlsOf<InputSelectGuideForm>> = new FormGroup<ControlsOf<InputSelectGuideForm>>({
    label: new FormControl('Select label'),
    leftIcon: new FormControl(''),
    placeholder: new FormControl(''),
    value: new FormControl('option 1'),
    general: this.formState.general,
    size: new FormControl('m'),
    multi: new FormControl(false)
  })

  valueChange(val: any) {
    this.form.controls.value.patchValue(val);
  }

  formChange(e: InputSelectGuideForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    if (e.size === 's' || e.size === 'xs') {
      if (this.form.value.label && this.form.controls.label.enabled) {        
        this.form.controls.label.patchValue('', { emitEvent: false })
        this.form.controls.label.disable();
      }
    } else {
      if (this.form.controls.label.disabled) {
        this.form.controls.label.enable();
      }
    }

    const componentCode = [...this.componentCode];
    const x = htmlBuild(this.form.value,'ngx-select');
    const xx = htmlSelectOptionBuild(x);
    componentCode[0].code.text = xx;
    this.componentCode = componentCode;
  }

  leftIconChange(): string {
    if (this.form.value.leftIcon) {
        return `\n  [leftIcon]="${this.form.value.leftIcon}"`;
    }
    return ``
}

test$ = of([
  {firstName: 'Bob', lastName: 'Sapp'}, 
  {firstName: 'Hontoni', lastName: 'Urukai'}
]).pipe(
  delay(5000)
)

valForSelect = {firstName: 'Hontoni', lastName: 'Urukai'};

}
