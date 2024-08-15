import { FormControlModel } from "../form-control.model";

export interface InputRichTextGuideForm extends FormControlModel {
    variation: 'simple' | 'extended' | null
}