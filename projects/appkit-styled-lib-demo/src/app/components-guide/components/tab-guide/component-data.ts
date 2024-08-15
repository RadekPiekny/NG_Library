import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Provide clear label for tab group or tablist.",
            "Ensure focusable by TAB Key and navigable by ARROW keys."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "The user uses tabs to navigate through the groupings of data.",
            "Limit tab labels to one or two words.",
            "Use [userClass] property binding for additional styling of NgxTabItemComponent"
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use tabs as a primary navigation for the application."
        ]
    }
}