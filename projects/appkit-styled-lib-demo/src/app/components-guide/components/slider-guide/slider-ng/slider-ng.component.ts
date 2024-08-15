import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'slider-ng',
  templateUrl: './slider-ng.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderNgComponent implements OnInit {
  ngOnInit(): void {
    this.form.valueChanges.subscribe(v => {
      console.log(v)
    })
  }
  form: FormGroup = new FormGroup({
    test: new FormControl<boolean | null>(null),
  })
}
