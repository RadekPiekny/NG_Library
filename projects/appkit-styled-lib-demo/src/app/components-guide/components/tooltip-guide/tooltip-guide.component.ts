import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IComponentDemo } from '../../../model/component.model';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { TooltipGuideForm } from './tooltip-guide.model';
import { buildTailwindImports } from '../../form-controls/form-control.model';
import { componentProperties } from '../component-properties-model';
import { tooltipData } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/pop-ups/ngx-tooltip/tooltip-properties';

@Component({
  selector: 'app-tooltip-guide',
  templateUrl: './tooltip-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipGuideComponent extends GuideBaseComponent {

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: `<ngx-button variation='primary' tooltip="Default tooltip">Hover me!</ngx-button>`
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxTooltipModule } from '@rp_custom_library/appkit-styled-lib';`        
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-tooltip')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_tooltipData = tooltipData;
  }

  ngx_tooltipData: componentProperties[];
  
  form: FormGroup<ToFormGroup<TooltipGuideForm>> = new FormGroup<ToFormGroup<TooltipGuideForm>>({
    custom: new FormControl(false),
  })

  formChange(v: Partial<TooltipGuideForm>) {
    const componentCode = [...this.componentCode];
    if (v.custom) {
      componentCode[0].code.text = `<ngx-button variation='primary' [tooltip]="customTooltip">Hover me!</ngx-button>
<ng-template #customTooltip>
    <div class="p-4 m-3 rounded bg-warning shadow-md font-bold">
        Warning tooltip with custom classes
    </div>
</ng-template>`;
    } else {
      componentCode[0].code.text = `<ngx-button variation='primary' tooltip="Default tooltip">Hover me!</ngx-button>`;
    }
    this.componentCode = componentCode;
  }
}
