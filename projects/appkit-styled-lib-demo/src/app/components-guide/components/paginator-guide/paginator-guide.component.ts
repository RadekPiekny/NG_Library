import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { PaginatorGuideForm } from './paginator-guide.model';
import { Subscription } from 'rxjs';
import { buildTailwindImports, buildTailwindMultipleImports, htmlBuild } from '../../form-controls/form-control.model';
import { NgxPaginationRange } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-pagination/ngx-pagination.model';
import { componentProperties } from '../component-properties-model';
import { form_control_baseData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base/form-control-base-properies';
import { paginationData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-pagination/ngx-pagination-properties';

@Component({
  selector: 'app-paginator-guide',
  templateUrl: './paginator-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorGuideComponent extends GuideBaseComponent {

  constructor(private cdr: ChangeDetectorRef) {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages: ['html'],
          lineNumbers: false,
          text: htmlBuild(this.form.value,'ngx-pagination')
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `import { NgxPaginationModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'TS',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-pagination','ngx-pagination-disabled-previous','ngx-pagination-disabled-next','ngx-input-number','ngx-button'])
        },
        label: 'Tailwind config',
        active: false
      },
    ]
    this.form_control_baseData = form_control_baseData;
    this.ngx_paginationData = paginationData;
    this.allPropertiesData = [...this.ngx_paginationData, ...this.form_control_baseData]
  }

  allPropertiesData: componentProperties[];
  ngx_paginationData: componentProperties[];
  form_control_baseData: componentProperties[];
  formSub: Subscription = new Subscription;

  form: FormGroup<ToFormGroup<PaginatorGuideForm>> = new FormGroup<ToFormGroup<PaginatorGuideForm>>({
    labels: new FormControl<boolean>(false),
    from: new FormControl<number>(0),
    step: new FormControl<number>(1),
    itemsPerPage: new FormControl<number>(10),
    totalItems: new FormControl<number>(124),
    resetOnNewData: new FormControl<boolean>(true),
  });

  formChange(d: Partial<PaginatorGuideForm>) {
    const componentCode = [... this.componentCode];
    componentCode[0].code.text = htmlBuild(d,'ngx-pagination');
    this.componentCode = componentCode;
  }

  rangeChange(e: NgxPaginationRange) {
    console.log(e);
  }

}