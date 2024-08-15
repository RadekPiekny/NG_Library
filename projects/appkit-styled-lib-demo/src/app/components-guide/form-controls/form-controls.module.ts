import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGuideComponent } from './input-checkbox-guide/checkbox-guide.component';
import { InputCheckboxGuideFormComponent } from './input-checkbox-guide/input-checkbox-guide-form/input-checkbox-guide-form.component';
import { InputBaseComponent } from './input-base/input-base.component';

import { GuideElementsModule } from '../core/guide-elements.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextGuideComponent } from './input-text-guide/input-text-guide.component';
import { InputTextGuideFormComponent } from './input-text-guide/input-text-guide-form/input-text-guide-form.component';
import { 
  NgxRadioModule, 
  NgxInputCheckboxModule, 
  NgxToggleModule, 
  NgxInputTextModule, 
  NgxSelectModule, 
  NgxTabModule,
  NgxInputFileModule,
  NgxFileDropModule,
  NgxTextareaModule,
  NgxInputNumberModule,
  NgxInputDateModule,
  NgxRatioSliderModule,
  AppkitColorPickerModule,
  NgxMenuModule,
  NgxButtonModule,
  NgxRichTextModule,
  NgxInputAutocompleteModule
} from 'rp_custom_library/src/public-api';
import { InputSelectGuideComponent } from './input-select-guide/input-select-guide.component';
import { InputSelectGuideFormComponent } from './input-select-guide/input-select-guide-form/input-select-guide-form.component';
import { InputFileGuideComponent } from './input-file-guide/input-file-guide.component';
import { InputFileGuideFormComponent } from './input-file-guide/input-file-guide-form/input-file-guide-form.component';
import { FileSizePipe } from './input-file-guide/file-size.pipe';
import { TextareaGuideComponent } from './textarea-guide/textarea-guide.component';
import { TextareaGuideFormComponent } from './textarea-guide/textarea-guide-form/textarea-guide-form/textarea-guide-form.component';
import { InputRadioGuideComponent } from './input-radio-guide/input-radio-guide.component';
import { InputRadioGuideFormComponent } from './input-radio-guide/input-radio-guide-form/input-radio-guide-form.component';
import { InputDateGuideComponent } from './input-date-guide/input-date-guide.component';
import { InputDateGuideFormComponent } from './input-date-guide/input-date-guide-form/input-date-guide-form.component';
import { InputRatioSliderGuideComponent } from './input-ratio-slider-guide/input-ratio-slider-guide.component';
import { InputRatioSliderGuideFormComponent } from './input-ratio-slider-guide/input-ratio-slider-guide-form/input-ratio-slider-guide-form.component';
import { RichTextGuideFormComponent } from './rich-text-guide/rich-text-guide-form/rich-text-guide-form.component';
import { RichTextGuideComponent } from './rich-text-guide/rich-text-guide.component';
import { InputAutocompleteGuideComponent } from './input-autocomplete-guide/input-autocomplete-guide.component';
import { InputAutocompleteGuideFormComponent } from './input-autocomplete-guide/input-autocomplete-guide-form/input-autocomplete-guide-form.component';


const declarations = [
  CheckboxGuideComponent,
  InputTextGuideComponent,
  InputSelectGuideComponent
]

@NgModule({
  declarations: [
    [...declarations],
    InputCheckboxGuideFormComponent,
    InputBaseComponent,
    InputTextGuideFormComponent,
    InputAutocompleteGuideComponent,
    InputAutocompleteGuideFormComponent,
    InputSelectGuideFormComponent,
    InputFileGuideComponent,
    InputFileGuideFormComponent,
    FileSizePipe,
    TextareaGuideComponent,
    TextareaGuideFormComponent,
    InputRadioGuideComponent,
    InputRadioGuideFormComponent,
    InputDateGuideComponent,
    InputDateGuideFormComponent,
    InputRatioSliderGuideComponent,
    InputRatioSliderGuideFormComponent,
    RichTextGuideComponent,
    RichTextGuideFormComponent
  ],
  imports: [
    CommonModule,
    GuideElementsModule,
    NgxRadioModule,
    NgxInputCheckboxModule,
    NgxToggleModule,
    NgxInputTextModule,
    NgxInputAutocompleteModule,
    NgxInputNumberModule,
    NgxTextareaModule,
    NgxSelectModule,
    NgxInputFileModule,
    NgxInputDateModule,
    NgxFileDropModule,
    NgxRatioSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTabModule,
    AppkitColorPickerModule,
    NgxMenuModule,
    NgxButtonModule,
    NgxRichTextModule
  ],
  exports: [
    [...declarations]
  ]
})
export class FormControlsModule { }
