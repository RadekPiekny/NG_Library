import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Date picker labels should clearly identify what is expected to be inputted by the user.",
            "Note* Screenreader users usually prefer separate combobox selections for Month, Day, Year."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Use the user local settings to show and input the date in correct format.",
            "Date picker calendar popup is not always necessary - especially for dates that are far from current day or the ones which don't require the user to see the context of days.",
            "Indicate current date.",
            "Keep the length of date picker input fixed instead of stretching full width, so the calendar popup will not be too far away from the actual date.            "
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Don't use date picker if users only need day, year or month. Use separate inputs or dropdown instead.",
            "Don't allow users to select dates which are not relevant to the context.",
            "Stretch the calendar to the full length of input."
        ]
    }
}