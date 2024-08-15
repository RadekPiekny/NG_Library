import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const calendar_Data: componentProperties[] = [
    {
        name: 'disableFrom',
        description: 'The property specifies a starting date from which the calendar becomes non-interactive',
        dataType:'Date, string',
        type: '@Input()'
    },
    {
        name: 'disableTo',
        description: 'The property specifies a an end date up to which the calendar becomes non-interactive',
        dataType: 'Date, string',
        type: '@Input()'
    },
    {
        name: 'disableRange',
        description: 'The property allows you to specify a date range during which the calendar dates are non-interactive',
        dataType: 'Date[]',
        type:'@Input()'
    },
    {
        name: 'selectedDate',
        description: 'The input property is used to specify which dates are selected. ',
        dataType: 'Date, string',
        type:'@Input()'
    },
    {
        name: 'width',
        description: 'The input property is used to customize the width of the calendar, (NOT FUNCTIONAL)',
        dataType: 'string',
        type:'@Input()'
    },
    {
        name: 'year',
        description:'The input property allows you to specify the year to be displayed. ',
        dataType:'number',
        type:'@Input()'
    },
    {
        name: 'month',
        description: 'The input property allows you to specify the month to be displayed.',
        dataType:'number',
        type:'@Input()'
    },
    {
        name: 'size',
        description:'The input property allows you to specify the size of the calendar.',
        dataType: '"s","xs","l","m"',
        type:'@Input()'
    },
    {
        name: 'dateChange',
        description:'The output property emits an event whenever the selected date changes.',
        dataType:'Date[]',
        type:'@Output()'

    }
]