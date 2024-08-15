import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const form_field_baseDate: componentProperties[] = [
    {
        name: 'leftIcon',
        description:'This input property is used to insert an icon on the left side of the component.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'fieldCssClass',
        description:'This input property is used to customize the css class of the component.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'label',
        description:'This input property specifies the text or content to be displayed as the components label.',
        dataType:'string',
        type:'@Input()'
    },

    {
        name: 'placeholder',
        description:'This input property specifies the text to be displayed as a placeholder within an input field or similar component.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'size',
        description:'This input property is used to change the size of the component according to the chosen option.',
        dataType:'"s","xs","m","suto"',
        type:'@Input()'
    }

]