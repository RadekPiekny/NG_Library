import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            `Use aria-label to identify component.`,
            "Slider label should be clear and concise.",
            `Use slider with numeric input for optimal screen reader usability.`,
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Use appropriate values for min, max, and step to ensure the slider is easy to use.",
            "Consider the placement and size of the slider to ensure it is easily discoverable and usable.",
            "Sliders can be used to allow the user to select a value.",
            "They are best used when precision is not of importance as they can be difficult for users."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use sliders for making very precise selections."
        ]
    }
}