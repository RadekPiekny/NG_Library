import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IComponentDemo } from '../../../model/component.model';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { MenuContainerGuideForm } from './menu-container-guide.model';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { buildTailwindMultipleImports, htmlBuild } from '../../form-controls/form-control.model';

@Component({
  selector: 'menu-container-guide',
  templateUrl: './menu-container-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuContainerGuideComponent extends GuideBaseComponent  {

  constructor(private cdr: ChangeDetectorRef) {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages: ['html'],
          lineNumbers: true,
          text: htmlBuild({},'ngx-menu-container')
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `import { NgxMenuContainerModule } from '@rp_custom_library/appkit-styled-lib';` 
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: buildTailwindMultipleImports(['ngx-menu'])
        },
        label: 'Tailwind',
        active: false
      }
    ]
  }

  form: FormGroup = new FormGroup<ToFormGroup<MenuContainerGuideForm>>({});

  formChange(c: Partial<MenuContainerGuideForm>) {}
  
}
