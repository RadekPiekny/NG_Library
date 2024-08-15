import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { InputRatioSliderForm } from './input-ratio-slider-guide.model';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { buildTailwindImports, buildTailwindMultipleImports, htmlBuild } from '../form-control.model';
import { NgxRatioSliderOutput } from 'rp_custom_library/src/lib/component/ngx-ratio-slider/ngx-ratio-slider.model';
import { componentData } from './component-data';
import { componentProperties } from '../../components/component-properties-model';
import { radio_sliderData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-ratio-slider/ngx-radio-slider-properties';

@Component({
  selector: 'input-ratio-slider-guide',
  templateUrl: './input-ratio-slider-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRatioSliderGuideComponent extends GuideBaseComponent {
  constructor() {
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
          text: `import { NgxInputRatioSliderModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-input-ratio-slider','ngx-input-number'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_radioSliderData = radio_sliderData;
  }

  ngx_radioSliderData: componentProperties[];
  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as InputRatioSliderForm);
    })
    this.formChange(this.form.value as InputRatioSliderForm)
  }

  form: FormGroup<ControlsOf<InputRatioSliderForm>> = new FormGroup<ControlsOf<InputRatioSliderForm>>({
    min: new FormControl(0, {
      updateOn: 'blur'
    }),
    max: new FormControl(100, {
      updateOn: 'blur'
    }),
    showScale: new FormControl(true),
    step: new FormControl(1),
    sliders: new FormArray([
      new FormGroup({
        value: new FormControl(2),
      }),
      new FormGroup({
        value: new FormControl(70),
      }),
    ]),
    segments: new FormArray([
      new FormGroup({
        cssClass: new FormControl('bg-primary'),
      }),
      new FormGroup({
        cssClass: new FormControl('bg-primary-lighten-100'),
      }),
      new FormGroup({
        cssClass: new FormControl('bg-primary-darken-100'),
      }),
    ]),
    disabled: new FormControl(false),
  })

  formChange(e: InputRatioSliderForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(e,'ngx-input-ratio-slider');
    this.componentCode = componentCode;
  }

  valueChange(e: NgxRatioSliderOutput) {
    e.sliders.forEach((s,i) =>{
      (this.form.controls.sliders.controls[i] as FormGroup).controls.value.patchValue(s.value, { emitEvent: false })
    })
  }

}
