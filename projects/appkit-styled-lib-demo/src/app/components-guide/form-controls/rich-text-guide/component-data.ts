import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Inform user of character limits.",
            "Provide instructions for completing field.",
            "Use aria-required='true' for required fields."
            
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Consider using a Rich Text Editor when the text input is intended to be viewed by others, and it is necessary to have control over the appearance of the content to effectively convey the intended message."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Consider limiting the formatting options to what is required.",
            "Don't use a Rich text editor component when the user doesn't need control over the look and feel of the input text:",
            "If the input is short, consider using an Input field.",
            "If input is longer, consider using a Text area field."

        ]
    }
}