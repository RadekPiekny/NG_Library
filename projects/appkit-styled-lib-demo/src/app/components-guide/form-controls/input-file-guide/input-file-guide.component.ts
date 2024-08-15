import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FileGuideForm, fwwfe } from './file-guide.model';
import { buildTailwindMultipleImports, htmlBuild } from '../form-control.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { componentData } from './component-data';
import { NgxInputFileComponent } from 'rp_custom_library/src/public-api';
import { componentProperties } from '../../components/component-properties-model';
import { input_fileData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-input-file/ngx-input-file-properties';
import { form_control_baseData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base/form-control-base-properies';

@Component({
  selector: 'input-file-guide',
  templateUrl: './input-file-guide.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class InputFileGuideComponent extends GuideBaseComponent {
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
          text: `import { NgxInputFileModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-input-file','ngx-dropzone'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_input_fileData = input_fileData;
    this.form_control_baseData = form_control_baseData;
    this.allPropertyData = [...this.ngx_input_fileData, ...this.form_control_baseData]
  }

  allPropertyData: componentProperties[];
  ngx_input_fileData: componentProperties[];
  form_control_baseData: componentProperties[];
  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as FileGuideForm);
    })
    this.formChange(this.form.value as FileGuideForm);
    this.loadComponent();
  }

  form: FormGroup<ControlsOf<FileGuideForm>> = new FormGroup<ControlsOf<FileGuideForm>>({
    label: new FormControl(null),
    uploadInstruction: new FormControl(''),
    accept: new FormControl(''),
    multiple: new FormControl(true),
    size: new FormControl('m'),
    icon: new FormGroup<ControlsOf<fwwfe>>({
      icon: new FormControl(false),
      iconDisabled: new FormControl(null),
      iconEnabled: new FormControl(null)
    }),
    disabled: new FormControl(false)
  })

  formChange(e: FileGuideForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(e,'ngx-input-file');
    if (e.icon.icon && this.form.value.size !== 'auto') {
      this.form.controls.size.patchValue('auto');
    }
    this.componentCode = componentCode;
    this.componentDataChange();
  }

  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true }) public orderedViewContainer: ViewContainerRef;
  fileList: File[] = [];
  componentRef: ComponentRef<NgxInputFileComponent>;
  loadComponent() {

    this.componentRef = this.orderedViewContainer.createComponent(NgxInputFileComponent);
    this.componentRef.instance.valueChange.subscribe((v: File[]) => {
      this.fileList = v;
    })
    this.componentDataChange();

  }

  componentDataChange() {
    if (!this.componentRef) {
      return;
    }
    if (this.form.value.label !== null) {
      this.componentRef.instance.label = this.form.value.label;
    }
    this.componentRef.location.nativeElement.classList.add('w-full');
    this.componentRef.instance.disabled = this.form.value.disabled;
    this.componentRef.instance.multiple = this.form.value.multiple;
    this.componentRef.instance.size = this.form.value.size;
    if (this.form.value.icon.icon) {
      this.componentRef.instance.icon = "";
    } else {
      this.componentRef.instance._icon = null;
    }
    if (this.form.value.icon.iconEnabled) {
      this.componentRef.instance.iconEnabled = this.form.value.icon.iconEnabled;
    }
    if (this.form.value.icon.iconDisabled) {
      this.componentRef.instance.iconDisabled = this.form.value.icon.iconDisabled;
    }
    this.componentRef.instance.uploadInstruction = this.form.value.uploadInstruction;
  }

}
