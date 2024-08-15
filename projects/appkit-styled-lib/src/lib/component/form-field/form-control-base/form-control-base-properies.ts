import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const form_control_baseData: componentProperties[] = [
    {
        name: 'tabindex',
        description: 'This input property allows you to dynamically set the tab order.',
        dataType: 'number',
        type: '@input()'
    },
    {
        name: 'invalid',
        description: 'This property sets the component as invalid.',
        dataType: 'boolean, " ", null',
        type: '@Input()'
    },
    {
        name: 'value',
        description: 'This input property serves as a way to pass and utilize data within components. ',
        dataType: 'T',
        type: '@Input()'
    },
    {
        name: 'id',
        description: 'This input property is used to generate unique ID.',
        dataType: 'string',
        type: '@Input()'
    },
    {
        name: 'readonly',
        description: 'This property changes the state to editable or not.',
        dataType: 'boolean, " ", null',
        type: '@Input()'
    },
    {
        name: 'disabled',
        description: 'This property changes the state to be disabled.',
        dataType: 'boolean, " ", null',
        type: '@Input()'
    },
    {
        name: 'valueChange',
        description: 'This output property emits an event when the value changes.',
        dataType: 'T',
        type: '@Output()'
    },
    {
        name: 'blur',
        description: 'This output property emits an event when an element loses focus',
        dataType: 'T',
        type: '@Output()'
    },
    
]