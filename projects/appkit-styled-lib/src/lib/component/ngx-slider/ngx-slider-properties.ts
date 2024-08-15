import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const slider_Data: componentProperties[] = [
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
        name: 'value',
        description: 'The input property allows you to specify the initial value of the slider. ',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'title',
        description: 'The input property allows you to specify the title associated with the slider',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'showValue',
        description: 'The property determines whether or not to display the current value of the slider alongside the slider track. ',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'valueChange',
        description: 'The output property emits an event whenever the selected slider changes',
        dataType: 'number',
        type: '@Output()'
    },
    {
        name: 'disabled',
        description: 'This input is used to control whether the slider is disabled or not.',
        dataType: 'boolean, " "',
        type:'@Input()'
    }
]