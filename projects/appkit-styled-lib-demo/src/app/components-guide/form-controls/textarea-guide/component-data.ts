import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: 'Accessibility guidelines',
        items: [
            "The text field should be labeled properly for screen readers.",
            "The text field should be clearly distinguishable from the surrounding content.",
            "Any required fields should be labeled as such."
        ]
    },
    use: {
        heading: 'How to use',
        items: [
            "Use short but descriptive hint text to help users understand what data format or type is expected to be entered.",
            "Use placeholders as a secondary label, but do not rely on placeholders as the primary way to label the field.",
            "Provide an error message and how to fix it and when the user enters wrong info."
        ]
    },
    useNot: {
        heading: 'How not to use',
        items: [
            "Do not overload the view with too many fields. Too many fields at once will overwhelm the user.",
            "Do not use text area if only short amount of text is expected."
        ]
    }

}