import { FormControlModel } from "../form-control.model";

export interface InputDateGuideForm extends FormControlModel {
    label: string | null,
    value: any | null,
    leftIcon: string | null,
    placeholder: string | null,
    size: 's' | 'xs' | 'm' | 'auto' | null,
    format: string | null,
    disableFrom: any | null,
    disableTo: any | null,
    disableRange: any | null,
    reset: boolean | null,
}