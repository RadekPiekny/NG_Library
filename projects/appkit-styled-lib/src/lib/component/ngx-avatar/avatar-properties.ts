import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const avatar_SingleData: componentProperties[] = [
    {
        name: 'compact',
        description: 'Property allows the component to adjust the size of the avatar icon based on the boolean value provided, decreasing its size when the value is true',
        dataType: 'boolean',
        type:' @Input()'
    },
    {
        name: 'isGroup',
        description: 'Property allows the component to create the effect of a grouped avatar when the provided boolean value is true',
        dataType: 'boolean',
        type:'@Input()'
    },
    {
        name: 'backgroundColor',
        description: 'Property allows the background color of the avatar to be changed based on the color written',
        dataType: ' string',
        type: '@Input()'
    }
]

export const avatar_GroupData: componentProperties[] = [
    {
        name: 'compact',
        description: 'Property allows the component to adjust the size of the avatar icon based on the boolean value provided, decreasing its size when the value is true',
        type:'@Input()',
        dataType: 'boolean'
    }
]