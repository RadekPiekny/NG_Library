import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { LoadingGuideForm } from './loading-guide.model';
import { ControlsOf } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { buildTailwindImports, buildTailwindMultipleImports, htmlBuild } from '../../form-controls/form-control.model';
import { componentProperties } from '../component-properties-model';
import { loader_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-loader/ngx-loader-properties';

@Component({
  selector: 'app-loading-guide',
  templateUrl: './loading-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingGuideComponent extends GuideBaseComponent  {
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
          text: ``
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxLoaderModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-loader','ngx-loader-circ','ngx-loader-line'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_loaderData = loader_Data;
  }

  ngx_loaderData: componentProperties[];
  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as LoadingGuideForm);
    })
    this.formChange(this.form.value as LoadingGuideForm);
  }

  form: FormGroup<ControlsOf<LoadingGuideForm>> = new FormGroup<ControlsOf<LoadingGuideForm>>({
    progress: new FormControl(33),
    compact: new FormControl(false),
    indeterminate: new FormControl(false),
    type: new FormControl('circle'),
  })

  formChange(e: LoadingGuideForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    const duplicateE = {...e};
    if (e.indeterminate) {
      delete duplicateE.progress
    }
    componentCode[0].code.text = htmlBuild(duplicateE,'ngx-loader');
    this.componentCode = componentCode;
  }

}