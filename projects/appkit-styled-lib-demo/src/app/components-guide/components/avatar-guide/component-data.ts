import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Avatar should be wrapped in a link using HTML if it links to an external page.",
            "Should be wrapped in a button if it opens a modal."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Avatars should be used as a visual indicator to represent a person such as a user or contact.",
            "When used to represent a user, an avatar can be made clickable to provide options relevant to a user."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use or design avatars that will steal the spotlight."
        ]
    }
}