import { FormControlModel } from "../form-control.model";

export interface CheckboxGuideForm extends FormControlModel {
    checked: boolean | null,
    indeterminate: boolean | null,
    label: string | null,
}