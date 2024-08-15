import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            `Use native HTML, <input type="checkbox">.`,
            "Associate the label with the input.",
            `Use <label> tag to define a label to the right of the checkbox.`,
            `Use aria-required="true" if checkbox is required and indicate with an asterisk * next to label.`,
            `List of checkboxes should be grouped in a <fieldset>`
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Checkboxes should be used in combination with a description or label.",
            "A single checkbox can be used to acknowledge a statement a list of 2 or more checkboxes can be used for multiple selections",
            `When providing many checkboxes to the user, consider also providing a way to "reset" or "select all`
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a checkbox when only one option is allowed to be selected from a list. Consider using a radio button instead.",
        ]
    }
}