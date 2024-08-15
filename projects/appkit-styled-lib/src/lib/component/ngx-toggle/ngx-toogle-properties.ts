import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const toggleData: componentProperties[] = [
    {
        name: 'indicator',
        description: 'this input is a property that manages the display of an indicator, which visually signifies the toggles current state',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'checked',
        description: 'This input is a property that assigns descriptive text to the toggle switch.  ',
        dataType: 'boolean',
        type: '@Input()'
    },
    {
        name: 'label',
        description: 'This input is a property used to provide a descriptive text or caption associated with the toggle switch. ',
        dataType: 'string',
        type: '@Input()'
    }
]