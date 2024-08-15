import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Dim and disable left/prev button when first page.",
            "Dim and disable right/last button when at last page."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Use a pagination component to help user navigate between multiple pages of data or content.",
            "Pagination should be placed at the bottom of the panel or page that it controls."
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use the pagination component as the primary navigation."
        ]
    }
}