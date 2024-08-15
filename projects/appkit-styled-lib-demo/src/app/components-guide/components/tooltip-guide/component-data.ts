import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {
    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Tooltip dialog is triggered and stays open when in focus or on hover.",
            "Tooltip dialog stays open when mouse hovers into dialog."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Tooltips should be used for every actionable icon.",
            "Use a tooltip where additional information would be helpful to the user.",
            "Use tooltips sparingly and only as needed."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use tooltips for information that is vital to complete a task.",
            "Do not hide primary actions within a tooltip.",
            "Do not use a tool within a tooltip."
        ]
    }
}