import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            `Ensure main window is not focusable when modal is open, use WAI ARIA role="dialog" and aria-modal="true" for screenreader to identify that the window behind modal can not be interacted with.`,
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Modal windows can be used to convey information, provide a warning, force acknowledgment of an action, or display an error.",
            "Modal should have a clear call to action to save or submit and/or close the modal.",
            `Modals should be used sparingly. Consider the following when using them: necessity of interrupting the user's flow, the data that will be blocked while displaying the modal and the importance of the message within the modal.`
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a modal within a modal.",
            "Do not use a modal for tasks that complex or take significant time to complete."
        ]
    }
}