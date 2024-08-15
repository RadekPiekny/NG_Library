import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const tooltipData: componentProperties[] = [
    {
        name: 'positions',
        description: 'This input property is used to change the position of tooltip pop-up',
        dataType:'ConnectionPositionPair[]',
        type: '@Input()'
    },
    {
        name: 'tooltip',
        description: 'This input property is used to display tooltip pop-up when button is clicked.',
        dataType:'any',
        type: '@Input()'
    },
]