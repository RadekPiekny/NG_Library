import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { BreadcrumbGuideForm } from './breadcrumb-guide.model';
import { buildTailwindImports } from '../../form-controls/form-control.model';
import { breadCrumb_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-breadcrumb/breadcrumb-properties';
import { breadCrumb_ItemData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-breadcrumb/breadcrumb-properties';
import { componentProperties } from '../component-properties-model';

@Component({
    selector: 'breadcrumb-guide',
    templateUrl: './breadcrumb-guide.component.html'
})
export class BreadcrumbGuideComponent extends GuideBaseComponent{

  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: `
<ngx-breadcrumb>
  <ngx-bc-item>
      <span class="Appkit4-icon icon-home-outline me-1 leading-3 h-3 text-xs"></span>
      <span tabindex="0">first level</span>
  </ngx-bc-item>
  <ngx-bc-item>
      <span tabindex="0">second level</span>
  </ngx-bc-item>
  <ngx-bc-item>third level</ngx-bc-item>
</ngx-breadcrumb>`
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxBreadcrumbModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-breadcrumb')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_breadcrumbData = breadCrumb_Data;
    this.ngx_bc_ItemData = breadCrumb_ItemData;
  }

  activeTab: string = 'ngx-breadcrumb';
  ngx_breadcrumbData: componentProperties[];
  ngx_bc_ItemData: componentProperties[];

  form: FormGroup<ToFormGroup<BreadcrumbGuideForm>> = new FormGroup<ToFormGroup<BreadcrumbGuideForm>>({
    fromUrl: new FormControl(false)
  })

  formChange(v: Partial<BreadcrumbGuideForm>) {}
  
}