import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const breadCrumb_Data: componentProperties[] = [
    {
        name: 'fromUrl',
        description: 'The input property receives values from URLs and uses them to dynamically generate the breadcrumb navigation',
        type: '@Input()',
        dataType: 'boolean'
    },
    {
        name: 'icons',
        description: 'When the input property icons is true, the image associated with the tag is added to the breadcrumb.',
        type: '@Input()',
        dataType: 'boolean'
    }
]

export const breadCrumb_ItemData: componentProperties[] = [
    {
        name: 'icons',
        description: 'When the input property icons is true, the image associated with the tag is added to the breadcrumb.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'link',
        description: ' THIS DOES NOT WORK',
        dataType: 'string',
        type: '@Input()'
    },
    {
        name: 'isLast',
        description: ' THIS DOES NOT WORK ',
        type: '@Input()',
        dataType: 'boolean'
    },
    {
        name: 'text',
        description: 'The property changes the breadcrumb navigation of that item to the value of the input.',
        type: '@Input()',
        dataType: 'string'
    },
    {
        name: 'routerLink',
        type: '@Input()',
        dataType: 'string',
        description: ' THIS IS NOT USED ON THE LIBRARY'
    }
]