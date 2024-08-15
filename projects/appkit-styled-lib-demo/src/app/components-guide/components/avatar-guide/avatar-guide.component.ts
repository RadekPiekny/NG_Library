import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { AvatarGuideForm } from './avatar-guide.model';
import { buildTailwindImports, htmlBuild, htmlButtonSingleText, htmlInsertNewEl, insertHTMLElement } from '../../form-controls/form-control.model';
import { avatar_SingleData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-avatar/avatar-properties';
import { avatar_GroupData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-avatar/avatar-properties';
import { componentProperties } from '../component-properties-model';

@Component({
  selector: 'app-avatar-guide',
  templateUrl: './avatar-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGuideComponent extends GuideBaseComponent {
  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: `<ngx-avatar>${this.form.value.text}</ngx-avatar>`
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxAvatarModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-avatar')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.avatar_singleData = avatar_SingleData;
    this.avatar_GroupedData = avatar_GroupData;
  }

  changeTab: string = 'avatar_singleData'
  avatar_singleData: componentProperties[];
  avatar_GroupedData: componentProperties[];

  form: FormGroup<ToFormGroup<AvatarGuideForm>> = new FormGroup<ToFormGroup<AvatarGuideForm>>({
    text: new FormControl('FL'),
    group: new FormControl(false),
  })

  formChange(v: Partial<AvatarGuideForm>) {
    const componentCode = [...this.componentCode];
    const htmlBasicAvatar = htmlBuild({},'ngx-avatar');
    if (v.group) {
      const htmlBasicGroup = htmlBuild({},'ngx-avatar-group');
      const avatarArr = ["FL1","FL2","FL3"];
      const els = avatarArr.map(a => {
        return htmlButtonSingleText(htmlBasicAvatar,a);
      })
      let res: string = htmlBasicGroup;
      els.forEach(e => {
        res = insertHTMLElement(res, e);
      })
      componentCode[0].code.text = res;
    } else {
      
      const el = htmlButtonSingleText(htmlBasicAvatar,this.form.value.text,false);
      componentCode[0].code.text = el;
    }
    
    
    this.componentCode = componentCode;
  }
}
