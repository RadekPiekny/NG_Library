import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const input_CheckboxData: componentProperties[]= [
    {
        name: 'valueChange',
        description: 'The output property emits an event whenever the selected checkbox changes.',
        type: '@Output()',
        dataType:'boolean'
    },
    {
        name: 'disabled',
        description: 'This input is used to control whether the checkbox is disabled or not.',
        dataType: 'any',
        type:'@Input()'
    },
    {
        name: 'id',
        description: 'The input property allows you to specify a unique identifier for the checkbox element.',
        dataType: 'string',
        type:'@Input()'
    },
    {
        name: 'label',
        description: 'The input property allows you to specify the text label associated with the checkbox.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name:'readonly',
        description:'This input is used to control whether the checkbox is editable or not.',
        dataType:'boolean, " "',
        type:'@Input()'
    },
    {
        name: 'checked',
        description: 'This input is used to control whether the checkbox is checked or not.',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'indeterminate',
        description:'The input property is used to set the checkboxs indeterminate state.',
        dataType:'boolean',
        type:'@Input()'
    }
]