import { FormControlSize } from "rp_custom_library/src/lib/model/form-control/form-control.model";
import { FormControlModel } from "../form-control.model";

export interface InputSelectGuideForm extends FormControlModel {
    label: string,
    value: any,
    leftIcon: string,
    placeholder: string,
    size: FormControlSize,
    multi: boolean
}