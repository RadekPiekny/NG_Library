export interface NgxRatioSliderData {
    sliders: NgxRatioSlider[];
    segments: _NgxRatioSliderSegment[];
}

export interface NgxRatioSlider {
    icon?: string
    cssClass?: string // tw or standard one;
    value: number;
}
export interface _NgxRatioSlider extends NgxRatioSlider {
    position: NgxRatioSliderPoint;
    index: number;
    errors: string[];
}

export interface NgxRatioSliderSegment {
    cssClass: string; // tw or standard one
    name?: string;
}
export interface _NgxRatioSliderSegment extends NgxRatioSliderSegment {
    
    start: NgxRatioSliderPoint;
    end: NgxRatioSliderPoint;
    width: number;
}
export interface NgxRatioSliderBoundaryBox {
    start: NgxRatioSliderPoint;
    end: NgxRatioSliderPoint;
    width: number;
    height: number;
}
export interface NgxRatioSliderPoint {
    x: number;
    y: number;
}
export interface NgxRatioSliderOutput {
    sliders: NgxRatioSlider[];
}
export interface NgxRatioSliderManualInput {
    left: number;
    show: boolean;
    min: number;
    max: number;
    cssClass: string;
    value: number;
    containerCssClass: string;
    arrowCssClass: string;
}