import { IComponentData } from "../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Use snackbars only if accessibility is not of concern.",
            "Aria labels are useless for snackbars",
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Use success, warning & error snackbar types to emphasize the nature of your message.",
            "Use only simple & short messages.",
            "Give the user enough time to read the message.",
            "More important messages should be closed by user, not timed out."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use snackbars for long paragraphs of text.",
            "Do not display error messages with success or warning snackbars, or vice versa."
        ]
    }
}