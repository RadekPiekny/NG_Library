import { FormControlModel } from "../form-control.model";

export interface InputAutocompleteGuideForm extends FormControlModel {
    label: string | null,
    value: any | null,
    leftIcon: string | null,
    placeholder: string | null,
    size: 's' | 'xs' | 'm' | null,
    reset: boolean | null
}