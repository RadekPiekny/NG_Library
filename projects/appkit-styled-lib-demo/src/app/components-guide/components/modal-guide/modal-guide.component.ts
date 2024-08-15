import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { ModalGuideForm } from './modal-guide.model';
import { buildTailwindImports } from '../../form-controls/form-control.model';
import { componentProperties } from '../component-properties-model';
import { modal_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-modal/ngx-modal-properties';
import { button_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-button/button-properties';

interface testData {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  type?: string;
  descValue?: string;
  badgeValue?: string;
  iconName?: string;
}

@Component({
  selector: 'modal-guide',
  templateUrl: './modal-guide.component.html',
  styleUrls: ['./modal-guide.component.scss']
})
export class ModalGuideComponent extends GuideBaseComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: `
<ngx-button variation='primary' (click)="showModal = true">open</ngx-button>
<ngx-modal [open]="showModal" [autoClose]="${this.form.value.autoClose}" (closeChange)="showModal = false">your content</ngx-modal>
          `
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxModalModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `showModal = ${this.form.value.open};`
        },
        label: 'TS',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-modal')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_modalData = modal_Data;
    this.ngx_buttonData = button_Data;
  }

  activeTab: string = 'ngx-modal'
  ngx_modalData: componentProperties[];
  ngx_buttonData: componentProperties[];

  form: FormGroup<ToFormGroup<ModalGuideForm>> = new FormGroup<ToFormGroup<ModalGuideForm>>({
    open: new FormControl(false),
    autoClose: new FormControl(true),
  })

  formChange(v: Partial<ModalGuideForm>) {
    const componentCode = [...this.componentCode];
    this.componentCode = componentCode;
    if (v.autoClose) {
      this.componentCode[0].code.text = `
<ngx-button variation='primary' (click)="showModal = true">open</ngx-button>
<ngx-modal [open]="showModal" [autoClose]="${this.form.value.autoClose}" (closeChange)="showModal = false">your content</ngx-modal>
      `;
    } else {
      this.componentCode[0].code.text = `
<ngx-button variation='primary' (click)="showModal = true">open</ngx-button>
<ngx-modal [open]="showModal" [autoClose]="${this.form.value.autoClose}">your content</ngx-modal>
      `;
    }

  }

  openModal() {
    this.form.controls.open.patchValue(true);
    this.cdr.markForCheck();
  }
  
  closeModal() {
    this.form.controls.open.patchValue(false);
    this.cdr.markForCheck();
  }

}
