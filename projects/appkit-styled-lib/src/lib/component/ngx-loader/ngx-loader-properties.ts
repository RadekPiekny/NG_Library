import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const loader_Data: componentProperties[] = [
    {
        name: 'type',
        description: 'The input property specifies the type or style of loader to be displayed line or circle. ',
        dataType:'"line", "circle"',
        type: '@Input()'
    },
    {
        name: 'progress',
        description: 'The input property specifies the progress value of the loading process.',
        dataType:'number',
        type: '@Input()'
    },
    {
        name: 'indeterminate',
        description: 'The input property controls whether the loader is in an indeterminate state or not.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'compact',
        description: 'The input property is used to adjust the size of the loader',
        dataType: 'boolean',
        type:'@Input()'
    }
]