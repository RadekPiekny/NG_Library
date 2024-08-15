import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const modal_Data: componentProperties[] = [
    {
        name: 'open',
        description:'The input property controls whether the modal is visible or hidden.',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'focus',
        description:'The input property specifies whether the modal should automatically receive focus when it is opened. ',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'autoClose',
        description:'The input property specifies whether the modal should automatically close under certain conditions, such as when the user clicks outside the modal or presses the escape key.',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'closeChange',
        description:'The output property emits an event whenever the modal is closed. ',
        dataType:'boolean',
        type:'@Output()'
    },
]