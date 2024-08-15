import { componentProperties } from "projects/appkit-styled-lib-demo/src/app/components-guide/components/component-properties-model";

export const badge_Data: componentProperties[] = [
    {
        name: 'filled',
        type: '@Input()',
        dataType: 'boolean',
        description: 'The input property, when set to true, causes the badge to be filled with color.'
    },
    {
        name: 'sentiment',
        type: '@Input()',
        dataType: '"default", "neutral", "positive", "negative", "warning"',
        description: 'The input property changes the badges style to warning, default, negative, or positive based on its value.'
    },
    {
        name: 'variation',
        type: '@Input()',
        dataType: '"Inline", "Contained"',
        description:'The input property changes the badges size according to the selected value.'
    }
]

export const formBaseData: componentProperties[] = [

]