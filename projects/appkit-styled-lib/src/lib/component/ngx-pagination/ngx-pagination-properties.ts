import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const paginationData: componentProperties[] = [
    {
        name: 'current',
        description: 'This input property is used to manage and display the current page number.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'from',
        description: 'This input property is used to define the starting point or the first item number of the current page.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'itemsPerPage',
        description: 'This input property is used to define the total number of items to be displayed at a time.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'totalItems',
        description: 'This input property is used to define the total number of items to be displayed.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'to',
        description: 'This input property is used to define the ending point or the last item number of the current page.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'step',
        description: 'This input property is used to define the increment by which the pagination control moves.',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'resetOnNewData',
        description: 'This input property when set as true when we have new data reset the pagination.',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'labels',
        description: 'This input property is used to provide descriptive text for the pagination controls',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'rangeChange',
        description: 'This output property emits an event every time the range changes.',
        dataType: 'NgxPaginationRange',
        type: '@Input()'
    }
    
]