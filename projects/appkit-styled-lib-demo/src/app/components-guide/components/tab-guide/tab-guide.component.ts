import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../guide-base.component';
import { TabGuideForm, TabVariation } from './tab-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { componentData } from './component-data';
import { buildTailwindImports, buildTailwindMultipleImports } from '../../form-controls/form-control.model';
import { componentProperties } from '../component-properties-model';
import { ngx_tabData, ngx_tab_itemData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-tab/ngx-tab-properties';

@Component({
  selector: 'app-tab-guide',
  templateUrl: './tab-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGuideComponent extends GuideBaseComponent  {

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: this.tabCode()
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxTabModule } from '@rp_custom_library/appkit-styled-lib';`        
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-tab','ngx-button'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_tabData = ngx_tabData;
    this.ngx_tab_itemData = ngx_tab_itemData;
  }

  activeTab: string = 'ngx-tab-group';
  ngx_tabData: componentProperties[];
  ngx_tab_itemData: componentProperties[];
  justifyContentDefault = "justify-start";
  widthDefauult = "w-full";
  componentWidthDefauult = "noClass";
  tabGapFilledDefault = "gap-1"; 
  tabGapUnderlinedDefault = "gap-4"; 

  tabCode(): string {
    let gap: string | null;
    let width: string | null;
    let justifyContent: string | null;
    let filled: string | null;
    let underlineTrack: string | null;
    let inputs: string;
    let componentWidth;
    if (this.form.value.filled === true) {
      filled = `[filled]="true"`
    } else {
      filled = null;
    }
    if (this.form.value.underlineTrack === false) {
      underlineTrack = `[underlineTrack]="false"`
    } else {
      underlineTrack = null;
    }
    if (this.form.value.filled && this.form.value.tabGap === this.tabGapFilledDefault) {
      gap = null;
    } else {
      if (!this.form.value.filled && this.form.value.tabGap === this.tabGapUnderlinedDefault) {
        gap = null;
      } else {
        gap = `[gap]="${this.form.value.tabGap}"`;
      }
    }

    if (this.form.value.width === this.widthDefauult) {
      width = null;
    } else {
      width = `[width]="${this.form.value.width}"`;
    }
    if (this.form.value.justifyContent === this.justifyContentDefault) {
      justifyContent = null;
    } else {
      justifyContent = `[justifyContent]="${this.form.value.justifyContent}"`;
    }
    inputs = `${filled ? filled + ' ' : ''}${width ? width + ' ' : ''}${justifyContent ? justifyContent + ' ' : ''}${gap ? gap + ' ' : ''}${filled ? filled + ' ' : ''}${underlineTrack ? underlineTrack + ' ' : ''}`;
    inputs = inputs.trim();
    if (inputs) {
      inputs = ' ' + inputs;
    }
    
    if (this.form.value.componentWidth === this.componentWidthDefauult) {
      componentWidth = '';
    } else {
      componentWidth = `class="${this.form.value.componentWidth}"`;
    }

    return  `<ngx-tab-group ${componentWidth}${inputs}>\n
  <ngx-tab-item${this.form.value.disabled ? ' [disabled]="true"':''}>First tab</ngx-tab-item>
  <ngx-tab-item${this.form.value.disabled ? ' [disabled]="true"':''}><span class="Appkit4-icon icon-accept-outline"></span> Second Tab</ngx-tab-item>
  <ngx-tab-item${this.form.value.disabled ? ' [disabled]="true"':''}><span class="Appkit4-icon icon-accept-outline"></span> Third Tab</ngx-tab-item>\n
</ngx-tab-group>`.replace(' >', '>')
  }

  form: FormGroup<ToFormGroup<TabGuideForm>> = new FormGroup<ToFormGroup<TabGuideForm>>({
    tabs: new FormArray([
      new FormGroup({
        text: new FormControl(''),
        active: new FormControl(false),
      })
    ]),
    filled: new FormControl(false),
    componentWidth: new FormControl('noClass'), 
    width: new FormControl('w-full'),
    justifyContent: new FormControl('justify-start'),
    tabGap: new FormControl('gap-4'),
    underlineTrack: new FormControl(true),
    disabled: new FormControl(false)
  })

  formChange(v: Partial<TabGuideForm>) {
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = this.tabCode();
    this.componentCode = componentCode;
  }

}