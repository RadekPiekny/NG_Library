import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const input_radioData: componentProperties[] = [
    {
        name: 'label',
        description: 'The input property allows you to specify the text label associated with the radio button.',
        dataType: 'any',
        type: '@Input()'
    },
    {
        name: 'id',
        description:'The input property allows you to specify a unique identifier for the radio button element.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'name',
        description:'The property allows you to specify the name attribute for the radio button input element.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'value',
        description: 'The property allows you to specify the value associated with the radio button.',
        dataType: 'any',
        type:'@Input()'
    },
    {
        name: 'valueChange',
        description:'The output property emits an event whenever the selected radio button changes',
        dataType:'any',
        type:'@Output()'
    },
    {
        name: 'disabled',
        description: 'This input is used to control whether the radio button is disabled or not',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'readonly',
        description: 'This input is used to control whether the radio button is editable or not.',
        dataType: 'boolean, " ", null',
        type:'@Input()'
    },
    {
        name: 'checked',
        description: 'This input is used to control whether the radio button is checked or not.',
        dataType: 'boolean, " ", null',
        type:'@Input()'
    }
]