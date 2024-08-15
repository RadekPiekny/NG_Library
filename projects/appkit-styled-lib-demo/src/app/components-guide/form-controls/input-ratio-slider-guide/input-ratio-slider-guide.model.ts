export interface InputRatioSliderForm {
    min: number;
    max: number;
    step: number;
    showScale: boolean;
    sliders: [
        {
            value: number
        }
    ],
    segments: [
        {
            cssClass: ''
        }
    ],
    disabled: boolean;
}