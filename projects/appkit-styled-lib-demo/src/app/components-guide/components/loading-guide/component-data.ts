import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            'role="alert" and aria-live="assertive" to ensure screen reader users are provided with information.'
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "A loading bar/spinner should be displayed anytime processing time or load time within an application exceeds 3 seconds."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a loading bar/spinner should not be used if the processing time is less than 3 seconds."
        ]
    }
}