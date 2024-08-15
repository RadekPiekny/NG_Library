import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            `Buttons should display a visible focus when users tab to them. Don't suppress focus outline.`,
            "When in focus, SPACE and ENTER can activate the button.",
            `Use standard markup to create buttons, such as a <button> to perform an action or a <a> to go to another page as screen readers handle buttons and links differently.`,
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "There should only be one primary button used within a view or context.",
            "Primary buttons should be used every time the user is creating something new.",
            `The primary button executes primary actions and should be as visible as possible.`,
            `Position primary action button to the right of the other button options.`
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use more than one primary button within a given view or context.",
            "Do not use a primary button for actions that are optional or don't warrant emphasis within the given context."
        ]
    }
}