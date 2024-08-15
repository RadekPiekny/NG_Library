import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            "Use the nav element. This allows assistive technology to present the breadcrumbs in context as a navigational element on the page. Use ordered lists and list items.",
            "Use an ol for breadcrumbs and an li for each item. This allows assistive technology to enumerate the items in the breadcrumbs and allows shortcuts between list items.",
            "Use ARIA markup for additional context. Use aria-label='Breadcrumbs' on the main element and aria-current='page' on the current page."
        ]
    },
    use: {
        heading: "How to use",
        items: [
            "Breadcrumbs should be used to inform the user of the path taken to the current page they are on and also provide a way to link back to the previous pages from that path.",
            "Use [fromUrl] attribute to generate dynamic path links from URL"
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not include a breadcrumb within applications that contain only a few pages or have limited levels of hierarchy. In these instances, breadcrumb can be confusing to users.",
            "Do not use a breadcrumb as a primary navigation."
        ]
    }
}