import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { ButtonGuideForm, ButtonVariation } from './button-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { buildTailwindImports, htmlBuild, htmlButtonBuild, htmlButtonSingleText, htmlInsertNewEl } from '../../form-controls/form-control.model';
import { cloneDeep } from 'lodash';
import { componentProperties } from '../component-properties-model';
import { button_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button/button-properties';

@Component({
  selector: 'app-button-guide',
  templateUrl: './button-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGuideComponent extends GuideBaseComponent {

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: htmlButtonSingleText(htmlButtonBuild(cloneDeep(this.form.getRawValue()),'ngx-button'),'ngx-button')
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxButtonModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-button')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_buttonData = button_Data;
  }

  ngx_buttonData: componentProperties[];

  form: FormGroup<ToFormGroup<ButtonGuideForm>> = new FormGroup<ToFormGroup<ButtonGuideForm>>({
    variation: new FormControl(ButtonVariation.Primary),
    compact: new FormControl(false),
    disabled: new FormControl(false),
    text: new FormControl('Button'),
    icon: new FormControl(false),
    iconOnly: new FormControl(false),
    negative: new FormControl(false),
  })

  textResult = "Button";
  formChange(v: Partial<ButtonGuideForm>) {
    this.textResult = '';
    const newObject = cloneDeep(this.form.getRawValue());
    delete newObject.icon;
    this.textResult = newObject.text;
    const componentCode = [...this.componentCode];
    delete newObject.iconOnly;
    let btn = htmlButtonBuild(newObject,'ngx-button');

    if (v.iconOnly) {
      newObject.icon = true;
      btn = btn.replace(">"," icon>");
      if (this.textResult) {
        this.textResult = '';
      }
    }
    if (this.form.getRawValue().icon) {
      let result = htmlInsertNewEl(btn,{class: 'Appkit4-icon icon-moon-outline'},'span');
      if (this.textResult) {
        result = htmlInsertNewEl(result,null,null,this.textResult);
      }
      this.textResult = result;
      componentCode[0].code.text = result;
    } else {
      componentCode[0].code.text = htmlButtonSingleText(btn,this.textResult);
      
    }
    this.componentCode = componentCode;
    if (v.variation === ButtonVariation.Tertiary || v.variation === ButtonVariation.transparent) {
      if (this.form.controls.negative.disabled) {
        return;
      }
      this.form.controls.negative.patchValue(false,{emitEvent: false});
      this.form.controls.negative.disable({emitEvent: false});
    } else {
      if (this.form.controls.negative.enabled) {
        return;
      }
      this.form.controls.negative.enable();
    }
  }

}
