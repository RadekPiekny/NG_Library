import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "If badge provides a link, it should be contained in a link tag",
            "When used as a link, the image should describe the action."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Badges are used as visual indicators that describe a status within an application.",
            "Badge labels should be short but descriptive."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a badge as a button or navigation.",
            "Do not change the color of badges to colors from outside of Appkit."
        ]
    }
}