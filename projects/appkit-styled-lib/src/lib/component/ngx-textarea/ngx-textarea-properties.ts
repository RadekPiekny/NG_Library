import { componentProperties } from 'projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model';

export const textareaData: componentProperties[] = [
    {
        name: 'maxlength',
        description: 'This input property is used to set the maximum number of characters.',
        dataType: 'number, undefined',
        type: '@Input()'
    },
    {
        name: 'rows',
        description: 'This input property is used to set the number of rows that show without scrolling.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'resize',
        description: 'This input property is used to change the size of the component.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'inputElement',
        description: 'This output property emits an event when the input value changes.',
        dataType: 'HTMLTextAreaElement',
        type: '@Output()'
    }
];
