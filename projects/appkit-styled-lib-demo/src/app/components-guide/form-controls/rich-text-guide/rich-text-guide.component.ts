import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GuideBaseComponent } from '../../components/guide-base.component';
import {
  buildTailwindMultipleImports,
} from '../form-control.model';
import { InputRichTextGuideForm } from './rich-text-model';
import { ControlsOf } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { FormControl, FormGroup } from '@angular/forms';
import { componentData } from './component-data';
import { componentProperties } from '../../components/component-properties-model';
import { ngx_rich_textData } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-rich-text/ngx-rich-text-properties';

@Component({
  selector: 'app-rich-text-guide',
  templateUrl: './rich-text-guide.component.html',
})
export class RichTextGuideComponent
  extends GuideBaseComponent
  implements OnInit
{
  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages: ['html'],
          lineNumbers: false,
          text: this.richTextCode(),
        },
        label: 'HTML',
        active: true,
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: false,
          text: `import { NgxRichTextModule } from '@rp_custom_library/appkit-styled-lib';`,
        },
        label: 'Import',
        active: false,
      },
      {
        code: {
          languages: ['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports([
            'ngx-rich-text',
            'ngx-color-picker',
            'ngx-create-link-overlay',
            'ngx-tooltip',
            'ngx-button',
          ]),
        },
        label: 'Tailwind config',
        active: false,
      },
    ];
    this.ngx_rich_TextData = ngx_rich_textData;
  }

  ngx_rich_TextData: componentProperties[];

  richTextCode() {
    return `
    <div class="p-4 rounded-lg shadow dark:shadow-lg" [class]=" form.value.variation === 'simple' ? 'w-96':' w-full'">
        <ngx-rich-text [editedElement]="elementWithContent" [variation]="${this.form.value.variation}"></ngx-rich-text>
        <div [contentEditable]="true" class="w-full h-20 mt-3 px-4 outline-none border border-transparent rounded-lg focus:border-neutral-300 dark:focus:border-neutral-600" #ffff>ttt</div>
    </div>
    `
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((d) => {
      this.formChange(d as InputRichTextGuideForm);
    });
    this.formChange(this.form.value as InputRichTextGuideForm);
  }

  editor: HTMLTextAreaElement;
  form: FormGroup<ControlsOf<InputRichTextGuideForm>> = new FormGroup<
    ControlsOf<InputRichTextGuideForm>
  >({
    // value: new FormControl('Value of the input'),
    variation: new FormControl('simple'),
    general: this.formState.general,
  });

  valueChange(val: any) {
    // this.form.controls.value.patchValue(val);
    console.log('here');
  }

  formChange(e: InputRichTextGuideForm) {
    // TODO right now we send form back and forth across component without really doing it the right way. So the form mutates.
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = this.richTextCode();
    this.componentCode = componentCode;
  }

  inputElChange(el: ElementRef<HTMLTextAreaElement>) {
    this.editor = el.nativeElement;
  }

  @ViewChild('ffff') ffff;
}
