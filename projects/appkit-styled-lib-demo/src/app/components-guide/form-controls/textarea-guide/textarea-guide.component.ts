import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { componentData } from './component-data';
import { FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { TextareaGuideForm } from './textarea-guide.model';
import { htmlBuild } from '../form-control.model';
import { componentProperties } from '../../components/component-properties-model';
import { form_field_baseDate } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base/form-field-base-properties';
import { textareaData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-textarea/ngx-textarea-properties';

@Component({
  selector: 'textarea-guide',
  templateUrl: './textarea-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaGuideComponent extends GuideBaseComponent {

  constructor() {
    super()
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages: ['html'],
          lineNumbers: false,
          text: ``
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `import { NgxTextareaModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: true,
          text: `/** @type {import('tailwindcss').Config} */

          module.exports = {
            presets: [
              require('./node_modules/rp_custom_library/assets/css/rp-brand-colors-tailwind-config')
            ],
            content: [
              "./src/**/*.{html,js,ts}",
              "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-ngx-textarea.mjs",
            ],
          }`
        },
        label: 'Tailwind config',
        active: false
      }
    ]
    this.form_field_baseData = form_field_baseDate;
    this.ngx_textareaData = textareaData;
    this.allPropertiesData = [...this.ngx_textareaData, ...this.form_field_baseData]
  }

  form_field_baseData:componentProperties[];
  ngx_textareaData:componentProperties[];
  allPropertiesData: componentProperties[];

  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange();
    })
    this.formChange()
  }

  form: FormGroup = new FormGroup<ToFormGroup<TextareaGuideForm>>({
    maxlength: new FormControl(null),
    rows: new FormControl(3),
    resize: new FormControl(false),
    label: new FormControl('Label'),
    placeholder: new FormControl(''),
    focus: new FormControl(null),
  });

  formChange() {
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(this.form.value,'ngx-textarea');
    this.componentCode = componentCode;
  }

}
