import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Each accordion header needs a unique title, this provides context for assistive technology users without the need to expand all sections",
            "Use aria-expanded on trigger to express the default state.",
            "Use unique ids. Each aria-controls=\"id\" associates the control to the appropriate region by referencing the controlled element's ID."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Accordions should be used to shorten pages with typically more extended lengthy displays.",
            "Can be used to contain links or content.",
            "Use short but descriptive labels that best describe the content within the accordion."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use an accordion to contain important content that shouldn't be hidden to the user."
        ]
    }
}