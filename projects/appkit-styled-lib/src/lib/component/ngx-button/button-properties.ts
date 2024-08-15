import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const button_Data: componentProperties[] = [
    {
        name: 'compact',
        description: 'This property changes buttons dimensions',
        type: '@Input()',
        dataType: 'boolean, "true", "false", " "'
    },
    {
        name: 'negative',
        description: 'When the input property negative is set to true, it transforms the button into a negative state.',
        type:'@Input()',
        dataType: 'boolean, "false", "true", " "'
    },
    {
        name: 'cssClass',
        description: 'This property is used to customize the design of the button',
        type:'@Input()',
        dataType: 'string'
    },
    {
        name: 'size',
        description: 'This property is used to change the size of the button according to the size selected.',
        type: '@Input()',
        dataType: '"s", "xs", "m", "auto"'
    },
    {
        name: 'id',
        description: 'This property is used to set an id for the button.',
        type: '@Input()',
        dataType:'string'
    },
    {
        name: 'type',
        description:'This property specifies the type of the button being created.',
        type:"@Input()",
        dataType: '"button","reset", "submit"'
    },
    {
        name: 'icon',
        description:'This property is used to change the dimensions of the button to fit that of the icon.',
        type:'@Input()',
        dataType: 'boolean'
    },
    {
        name: 'variation',
        type:'@Input()',
        description: 'This property is used to change the state of the button to "primary", "secondary", or any other option that is selected.',
        dataType:'"primary", "secondary", "tertiary", "text", "negative", "transparent"'
    },
    {
        name: 'standard',
        description:'THIS DOESNT WORK ',
        type:'@Input()',
        dataType:'"base", "standard"'
    },
    {
        name: 'disabled',
        type: '@Input()',
        description:'This property changes the state of the button to be disabled.',
        dataType: 'boolean'
    },

]