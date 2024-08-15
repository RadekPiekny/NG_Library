import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const input_fileData: componentProperties[] = [
    {
        name: 'disabledLabel',
        description: 'This input property is used to display disabled message on the component.',
        dataType: 'string',
        type: '@Input()'
    },
    {
        name: 'label',
        description: 'This input property that holds the textual content or description associated with the component. ',
        dataType: 'string',
        type: '@Input()'
    },
    {
        name: 'uploadInstruction',
        description: 'This input property is used to display upload instructions on the component.',
        dataType: 'string',
        type: '@Input()'
    },
    {
        name: 'accept',
        description: 'This input property is used to display accepted file formats to be uploaded.',
        dataType: 'string',
        type: '@Input()'
    },
    {
        name: 'multiple',
        description: 'This input property is used to allow multiple files to be uploaded at once.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'iconEnabled',
        description: 'This input property allows to customize the icon to be displayed when component is editable.',
        dataType: 'string, null',
        type: '@Input()'
    },
    {
        name: 'iconDisabled',
        description: 'This input property allows to customize the icon to be displayed when component is disabled.',
        dataType: 'string, null',
        type: '@Input()'
    },
    {
        name: 'icon',
        description: 'This input property allows the visibility of an icon within the component',
        dataType: '',
        type: '@Input()'
    },
    {
        name: 'size',
        description: 'This input property is used to change the size of the component.',
        dataType: '"s","xs","m","auto"',
        type: '@Input()'
    }
]