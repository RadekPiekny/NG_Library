import { ReleaseData } from "./release.model";

export const releaseDocumentation: ReleaseData[] = [
    {
        version: {
            major: 5,
            minor:0,
            patch:3
        },
        date: new Date(2024,4,25),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: "Updating snackbar documentation (tailwind import)",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Updating Calendar component documentation",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Creation of the welcome page for ngx-library",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Adding Tailwind configurations on component documentation",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Updating documentation on how to install library on a new project",
                type: 'update'
            },
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:6
        },
        date: new Date(2024,2,27),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Fix documentation for ngx-select component',
                type:'update'
            }
        ]
    },

]
