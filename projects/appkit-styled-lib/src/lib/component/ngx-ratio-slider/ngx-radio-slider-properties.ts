import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const radio_sliderData: componentProperties[] = [
    {
        name: 'min',
        description: 'The property specifies the minimum value that the slider can represent.',
        dataType:'number',
        type: '@Input()'
    },
    {
        name: 'max',
        description: 'The property specifies the maximum value that the slider can represent.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'step',
        description: 'The input property specifies the incremental step size for adjusting the sliders value.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'showScale',
        description: 'The input property determines whether or not to display a visual scale alongside the slider.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'sliders',
        description: 'The property allows you to define the number of sliders present in the component.',
        dataType:'NgxRatioSlider[]',
        type:'@Input()'
    },
    {
        name: 'valueChange',
        description: 'The output property emits an event whenever the selected slider changes',
        dataType: 'NgxRatioSliderOutput',
        type: '@Output()'
    },
    {
        name: 'disabled',
        description: 'This input is used to control whether the slider is disabled or not.',
        dataType: 'boolean, " "',
        type:'@Input()'
    },
    {
        name: 'segments',
        description: 'This input allows you to specify the number of segments or intervals between values on the slider track. ',
        dataType: 'NgxRatioSliderSegment[]',
        type:'@Input()'
    }
]