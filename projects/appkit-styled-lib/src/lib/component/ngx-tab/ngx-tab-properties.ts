import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const ngx_tabData: componentProperties[] = [
    {
        name: 'filled',
        description:'This input property toggles between two different design types.',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'justifyContent',
        description:'This input property specifies how the tab headers are aligned within the tab bar.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'width',
        description:'The input property specifies how much is the width of the tab headers.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'gap',
        description:'The input property specifies how much is the gap between the tab headers.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'groupName',
        description:' This input property is used to generate an unique Id for the tab component.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'underlineTrack',
        description:'Switch on/off underline track for underline not filled type. Usefull with using the tab inside the header/nav in which case we would recomend increase gap to gap-5',
        dataType:'boolean',
        type:'@Input()'
    }

]

export const ngx_tab_itemData: componentProperties[] = [
    {
        name: 'filled',
        description:'This input property toggles between two different design types.',
        dataType:'boolean, " "',
        type:'@Input()'
    },
    {
        name: 'disabled',
        description:'This input property specifies whether the tab is interactive or not. ',
        dataType:'boolean, " "',
        type:'@Input()'
    },
    {
        name: 'active',
        description:'This input property specifies when the tab is in active state.',
        dataType:'boolean, " "',
        type:'@Input()'
    },
    {
        name: 'activeChange',
        description:'This output property emits an event when the state of the tab header is changed.',
        dataType:'void',
        type:'@Output()'
    },
    {
        name: 'groupName',
        description:'This input property is used to generate an unique Id for the tab component.',
        dataType:'string, undefined',
        type:'@Input()'
    },
    {
        name: 'textColor',
        description:'This input property is used to customize the text color of the tab headers.',
        dataType:'string',
        type:'@Input()'
    },

]