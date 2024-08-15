import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const input_dateData: componentProperties[] = [
    {
        name: 'dateFormat',
        description:'The input property is used to choose the format in which dates should be displayed or entered.',
        dataType:'string',
        type:'@Input()'
    },
    {
        name: 'reset',
        description:'This property specifies whether the component should be reset to its initial state. ',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'type',
        description:'The input property specifies the type or format of the date input. ',
        dataType:'"date","datetime","datetime-local"',
        type:'@Input()'
    },
    {
        name: 'timeType',
        description:'The input property specifies the type or format of the time. ',
        dataType:'"12h","24h"',
        type:'@Input()'
    },
    {
        name: 'min',
        description:'The input property specifies the minimum allowable date that can be selected.',
        dataType:'string, Date',
        type:'@Input()'
    },
    {
        name: 'max',
        description:'The input property specifies the minimum allowable date that can be selected.',
        dataType:'string, Date',
        type:'@Input()'
    },
    {
        name: 'disableFrom',
        description:'The input property specifies a start date from which all subsequent dates will be disabled.',
        dataType:'string, Date',
        type:'@Input()'
    },
    {
        name: 'disableTo',
        description:'The input property specifies an end date from which all subsequent dates will be disabled. ',
        dataType:'string, Date',
        type:'@Input()'
    },
    {
        name: 'disableRange',
        description:'The input property specifies a start and end date from which all subsequent dates will be disabled. ',
        dataType:'string, Date',
        type:'@Input()'
    },
    {
        name: 'closeCalendarAfterPick',
        description:'The input property when set as true closes the calendar when date is picked.',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'showInternalErrors',
        description:'This input property is used to control the display of internal error messages.',
        dataType:'boolean',
        type:'@Input()'
    },
    {
        name: 'dateValidation',
        description:'The output property emits an event when a specific action or condition is met within the component.',
        dataType:'InputDateAutoDateValidation[]',
        type:'@Output()'
    }
]