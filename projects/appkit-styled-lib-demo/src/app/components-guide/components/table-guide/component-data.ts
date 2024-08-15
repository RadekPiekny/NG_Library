import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Table label must be clear and concise.",
            "Use <caption> element to give the table a name.",
            "Header cells must be marked up with <th>, and data cells with <td>."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Tables should be used to organize and display data that is too detailed to describe with text or a visualization.",
            "Take the time to understand what your users actually need to see within a table and how the columns should be organized within the table."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a table if the data can be more easily represented by text or a visualization.",
            "Do not use tables to recreate Microsoft Excel within your application."
        ]
    }
}