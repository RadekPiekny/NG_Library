import { IComponentData } from "../../../model/component.model";

export const componentData: IComponentData = {

    accessibility: {
        heading: "Accessibility guidelines",
        items: [
            'ARIA label should be updated to reflect the "on/off" states in your apps usage.'
        ]
    },
    use: {
        heading: "How to use",
        items: [
            'Ensure the toggle component is placed in a location that is easy to find and understand by the user.',
            "Use clear and concise language in the toggle component's label to convey its purpose and state.",
            'Toggles should be used whenever the user is presented with the ability to turn options on or off.',
            'In situations where the context is unambiguous without a text label, standalone switches are appropriate to use.',
            'When it comes to communicating activation (e.g., on/off states), switches are preferable over checkboxes. On the other hand, checkboxes are more suitable for communicating selection (e.g., multiple table rows). Unlike checkboxes, switches cannot display an error state.',
            'Switches have a binary state of either being on or off. There are no indeterminate switches in accessibility APIs, and therefore, they cannot be made accessible. If you want to display a partial state, it is recommended to use a checkbox instead of a switch.',
            'When a toggle is switched between the active or inactive state, the selection is applied immediately.',
            'Unlike a radio button, a toggle should be used to make a single option active or inactive.'
        ]
    },
    useNot: {
        heading: "How not to use",
        items: [
            "Do not use a toggle to switch between two unrelated options.",
            "Do not use a toggle for a primary action."
        ]
    }
}