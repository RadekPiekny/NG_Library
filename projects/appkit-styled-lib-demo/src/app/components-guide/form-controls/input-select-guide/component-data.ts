import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            `Label for form field should be text before form field.`,
            "Label and format should explain how information should be entered into form field. ex: First, Middle, Last Name, Birthdate (MM/DD/YYYY)",
            `Provide error message and how to fix it and when user enters wrong info.`,
            `Any required fields should be labeled as such.`,
            `Provide a legend before each group of input fields indicating that the required field indicator () is a required field. Ex: " required".`
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Input fields should support the type and amount of data a user is expected to enter into it. For example, if the data is to be currency, then limit accepted values to only numerical values and consider auto formatting to maintain consistency.",
            "Use short but descriptive hint text to help users understand what data format or type is expected to be entered.",
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not overload the view with too many fields. Too many fields at once will overwhelm the user.",
            "Do not use a single line field if the expected amount of text will exceed the provided text area."
        ]
    }
}