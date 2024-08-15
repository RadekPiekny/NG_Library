import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IComponentDemo } from '../../../model/component.model';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { AccordionGuideForm } from './accordion-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { buildTailwindMultipleImports } from '../../form-controls/form-control.model';
import { ngx_accordionData, ngx_accordion_btn_itemData, ngx_accordion_itemData } from './accordion-properties';
import { componentProperties } from '../component-properties-model';

@Component({
  selector: 'app-accordion-guide',
  templateUrl: './accordion-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGuideComponent extends GuideBaseComponent  {

  constructor(private cdr: ChangeDetectorRef) {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages: ['html'],
          lineNumbers: true,
          text: this.accordionCode()
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `import { NgxAccordionModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: buildTailwindMultipleImports(['ngx-accordion','ngx-button'])
        },
        label: 'Tailwind',
        active: false
      }
    ]
    this.ngx_accordionData = ngx_accordionData;
    this.ngx_accordion_itemData = ngx_accordion_itemData;
    this.ngx_accordion_btn_itemData = ngx_accordion_btn_itemData;
  }

  ngx_accordionData: componentProperties[];
  ngx_accordion_itemData: componentProperties[];
  ngx_accordion_btn_itemData: componentProperties[];

  accordionCode(): string {
    if(this.form.value.type === 'item') {
      return `<ngx-accordion${
        this.form.value.variation===true ? ' [single]="true"' : ''
      }>\n\t<ngx-accordion-item title="New York">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item>
      \n\t<ngx-accordion-item title="London">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item>
      \n\t<ngx-accordion-item title="Hong Kong">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item>
      \n\t<ngx-accordion-item title="Tokyo">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item>
      </ngx-accordion>`;
    }
    else {
      return `<ngx-accordion${
        this.form.value.variation===true ? ' [single]="true"' : ''
      }>\n\t<ngx-accordion-item-btn [state]="${this.form.value.state}" title="New York">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item-btn>
      \n\t<ngx-accordion-item-btn [state]="${this.form.value.state}" title="London">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item-btn>
      \n\t<ngx-accordion-item-btn [state]="${this.form.value.state}" title="Hong Kong">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item-btn>
      \n\t<ngx-accordion-item-btn [state]="${this.form.value.state}" title="Tokyo">\n\t\Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ultricies nibh,
       a molestie tellus sagittis id. Aliquam ornare libero ut fermentum lacinia.
      </ngx-accordion-item-btn>
      </ngx-accordion>`;
    }
  }

  form: FormGroup = new FormGroup<ToFormGroup<AccordionGuideForm>>({
    variation: new FormControl(true),
    state: new FormControl('collapse'),
    type: new FormControl('item')
  });

  formChange(c: Partial<AccordionGuideForm>) {
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = this.accordionCode();
    this.componentCode = componentCode; 
  }

  activeTab: string = 'ngx-accordion'
}
