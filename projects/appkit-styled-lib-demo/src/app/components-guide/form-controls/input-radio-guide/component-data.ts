import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            `A radio button is a selector used when only one option can be selected from a list.`,
            `Group related radio buttons together with <fieldset> and describe the group with <legend>.`,
            `Radio buttons should provide current state to screen reader (selected or unselected).`,
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Use clear and concise labels.",
            "Group related options together.",
            `Provide clear visual indicators for selected options.`,
            "A radio button should always include a label for each possible selection.",
            "Only one option can be selected using a radio button. There must be at least two options available to choose from."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a radio button to support the selection of multiple options.",
            "Do not use a radio button if there is only one option.",
            "Do not use a radio button without a label.",
            "Do not use a radio button as a form of navigation or to trigger an action."
        ]
    }
}