import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GuideFormBaseComponent } from '../../../components/guide-form-base.component';
import { InputRatioSliderForm } from '../input-ratio-slider-guide.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { IColorBrand } from 'rp_custom_library/src/lib/component/appkit-color-picker/color';

@Component({
  selector: 'input-ratio-slider-guide-form',
  templateUrl: './input-ratio-slider-guide-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRatioSliderGuideFormComponent extends GuideFormBaseComponent {
  @Input() form: FormGroup<ToFormGroup<InputRatioSliderForm>>;
  @Output() formChange = new EventEmitter<Partial<InputRatioSliderForm>>();

  get sliders() {
    return this.form.get('sliders') as FormArray;
  }

  get segments() {
    return this.form.get('segments') as FormArray;
  }

  colorChange(i: number, color: IColorBrand) {
    (this.segments.controls[i] as FormGroup).controls.cssClass.patchValue(`bg-${color.type}-${color.tint}`);
  }
  addSlider() {
    const newSlider = new FormGroup({
      value: new FormControl(90),
    })
    const newSegment = new FormGroup({
      cssClass: new FormControl('bg-primary'),
    })
    this.sliders.push(newSlider);
    this.segments.push(newSegment);
  }

  deleteSlider(i: number) {
    this.sliders.removeAt(i);
    this.segments.removeAt(i+1);
  }
}
