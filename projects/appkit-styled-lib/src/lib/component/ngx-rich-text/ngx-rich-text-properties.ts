import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const ngx_rich_textData: componentProperties[] = [
    {
        name: 'config',
        description:'This input properties changes the configurations of the control panel.',
        dataType:'IRichTextControlConfig[]',
        type:'@Input()'
    },
    {
        name: 'editedElement',
        description:'The input property specifies the HTML element or content that is to be edited within the rich text editor.',
        dataType:'HTMLElement',
        type:'@Input()'
    },
    {
        name: 'variation',
        description:'The input property toggles between the configuration of the panel between simple and expanded.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'htmlChange',
        description:'This output property emits an event every time the html is changed.',
        dataType:'string',
        type:'@Output()'
    }
]