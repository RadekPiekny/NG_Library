import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const ngx_selectData: componentProperties[] = [
    {
        name: 'changeAllSelection',
        description: '',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'maxScreenRatioContainer',
        description: '',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'overlayWidthExactMatch',
        description: '',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'emitOnlyOnInteraction',
        description: '',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'retainNonExistingOptions',
        description: '',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'overlayItemsShow',
        description: '',
        dataType: 'number',
        type: '@Input()'
    },
    {
        name: 'multi',
        description: '',
        dataType: 'boolean, " "',
        type: '@Input()'
    },
    {
        name: 'search',
        description: '',
        dataType: 'boolean, " "',
        type: '@Input()'
    },
    {
        name: 'disabled',
        description: '',
        dataType: 'boolean, null, " "',
        type: '@Input()'
    }, 
    {
        name: 'value',
        description: '',
        dataType: 'any',
        type: '@Input()'
    }, 
    {
        name: 'searchChange',
        description: '',
        dataType: 'string',
        type: '@Output()'
    }
]

export const ngx_optionData: componentProperties[] = [
    {
        name: 'optionData',
        description: '',
        dataType: 'INgxOptionProps',
        type: '@Input()'
    },
    {
        name: 'selected',
        description: '',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'multi',
        description: '',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'value',
        description: '',
        dataType: 'any',
        type: '@Input()'
    },
    {
        name: 'displayValue',
        description: '',
        dataType: 'any',
        type: '@Input()'
    },
    {
        name: 'clickEvent',
        description: '',
        dataType: 'void',
        type: '@Input()'
    }
]