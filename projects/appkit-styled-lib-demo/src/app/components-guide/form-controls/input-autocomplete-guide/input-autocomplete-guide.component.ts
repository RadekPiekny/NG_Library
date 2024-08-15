import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { InputAutocompleteGuideForm } from './input-autocomplete-guide.model';
import { componentData } from './component-data';
import { buildTailwindImports, codeState, htmlBuild } from '../form-control.model';
import { BehaviorSubject, map, startWith } from 'rxjs';

@Component({
  selector: 'input-autocomplete-guide',
  templateUrl: './input-autocomplete-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAutocompleteGuideComponent extends GuideBaseComponent implements OnInit {
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
          text: `import { NgxInputTextModule } from '@rp_custom_library/appkit-styled-lib';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('ngx-input-text')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(d => {
      this.formChange(d as InputAutocompleteGuideForm);
    })
    this.formChange(this.form.value as InputAutocompleteGuideForm)
  }

  form: FormGroup<ControlsOf<InputAutocompleteGuideForm>> = new FormGroup<ControlsOf<InputAutocompleteGuideForm>>({
    label: new FormControl('Text input'),
    leftIcon: new FormControl(''),
    placeholder: new FormControl(''),
    value: new FormControl('Value of the input'),
    general: this.formState.general,
    size: new FormControl('m'),
    reset: new FormControl(false),
  })

  valueChange(val: any) {
    this.form.controls.value.patchValue(val);
  }

  formChange(e: InputAutocompleteGuideForm) { // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(e,'ngx-input-text');
    this.componentCode = componentCode;
  }

  leftIconChange(): string {
    if (this.form.value.leftIcon) {
        return `\n  [leftIcon]="${this.form.value.leftIcon}"`;
    }
    return ``
  }

  xxx = [
    'audi',
    'bmw',
    'mercedes'
  ]
  val = '';
  text$ = new BehaviorSubject<string>('');

  data$ = this.text$.pipe(
    map(text => {
      const result = this.xxx.filter(v => v.includes(text));
      console.log("result: ", result);
      return result
    }),
    startWith(this.xxx)
  )

  changeDataPrevention = false;
  select(text: string) {
    this.val = text;
    this.changeDataPrevention = true;
  }

  valChange(text: string) {
    if (this.changeDataPrevention) {
      this.changeDataPrevention = false;
      return;
    }
    this.text$.next(text);
  }

}
