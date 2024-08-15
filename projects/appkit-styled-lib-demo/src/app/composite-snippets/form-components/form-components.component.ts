import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponentsComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  form: FormGroup = new FormGroup({
    name: this.fb.control<string>('gtrergre'),
    level: this.fb.control<string | null>(null),
    description: this.fb.control<string | null>(null),
    checkboxTest: this.fb.control<boolean | null>(true),
    slider: this.fb.control<number>(0),
    wtf: this.fb.control<string>({
      value: null,
      disabled: true,
    }),
  });

  disableAll() {
    if (this.form.disabled) {
      this.form.enable();
    } else {
      this.form.disable()
    }
  }

  testClick(val: string) {
    this.form.controls.wtf.patchValue(val);
  }
}
