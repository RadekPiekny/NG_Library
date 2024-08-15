import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { componentData } from './component-data';
import { GuideBaseComponent } from '../guide-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { SliderGuideForm } from './slider-guide.model';
import { componentProperties } from '../component-properties-model';
import { slider_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-slider/ngx-slider-properties';

@Component({
  selector: 'app-slider-guide',
  templateUrl: './slider-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderGuideComponent extends GuideBaseComponent {

  constructor(private cdr: ChangeDetectorRef) {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages: ['html'],
          lineNumbers: false,
          text: this.sliderCode() 
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `import { NgxSliderModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      }, 
      {
        code: {
          languages: ['ts'],
          lineNumbers: true,
          text: `/** @type {import('tailwindcss').Config} */\n\nmodule.exports = {\n\tpresets: [\n\t\trequire('./node_modules/rp_custom_library/assets/css/rp-brand-colors-tailwind-config')\n\t],\n\tcontent: [\n\t\t"./src/**/*.{html,js,ts}",\n\t\t"./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-ngx-slider.mjs",\n\t],\n}`
        },
        label: 'Tailwind config',
        active: false
      }
    ]
    this.ngx_sliderData = slider_Data;
  }

  ngx_sliderData: componentProperties[];

  @ViewChild('sliderDemo') sliderComp:any;

  sliderCode(): string {
    return `<ngx-slider${this.form.value.disabled ? ' disabled' : '' }${this.form.value.title !== '' ? ' title="' + this.form.value.title + '"' : ''} [min]="${this.sliderMin}" [max]="${this.sliderMax}" [step]="${this.sliderStep}"></ngx-slider>`;
  }

  sliderMin: number = 1;
  sliderMax: number = 10;
  sliderStep: number= 1;

  sliderDemo = new FormControl<number | null>(1);
  form = new FormGroup<ToFormGroup<SliderGuideForm>>({
    disabled: new FormControl(false),
    min: new FormControl(1),
    max: new FormControl(10),
    step: new FormControl(1),
    title: new FormControl('')
  });

  formChange(v: Partial<SliderGuideForm>) {
    if(!(v.min === '' || v.max === '' || v.step === '')) {
      if(Number(v.min) < Number(v.max)) {
        this.sliderMax = Number(v.max);
        this.sliderMin = Number(v.min);
        this.sliderStep = Number(v.step);
        this.sliderDemo.patchValue(Number(v.min), { emitEvent: false });
      }
    }
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = this.sliderCode();
    this.componentCode = componentCode;
    this.cdr.detectChanges();
  }

}
