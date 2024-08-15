import { componentProperties } from 'projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model';

export const input_textData: componentProperties[] = [
    {
        name: 'type',
        description: 'This input property specifies the type of input field to be rendered.',
        dataType: '"text","email","password","url"',
        type: '@Input()'
    },
    {
        name: 'reset',
        description: 'This input property is used to reset the value of the input text.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'maxlength',
        description: 'This input property is used to set the maximum number of characters allowed.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'validation',
        description: 'This output property emits an event every time the value changes.',
        dataType: 'boolean',
        type: '@Output()'
    }
];
