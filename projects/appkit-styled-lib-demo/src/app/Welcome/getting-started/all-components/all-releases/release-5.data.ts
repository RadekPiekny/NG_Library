import { ReleaseData } from "./release.model";

export const releaseDataVer5: ReleaseData[] = [
    {
        version: {
            major: 5,
            minor:0,
            patch:4
        },
        date: new Date(2024,4,25),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: "Removed lodash from peerDependencies",
                type: 'update'
            }
        ]
    },
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
                description: "Updating tailwind configuration so that all colors are shown",
                type: 'bug'
            },
            {
                breakingChange: false,
                description: "Fixing 'disabled from / to' on ngx-calendar, removing unfinished components from menu in demo and updating htmlBuilder function for demo",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Fixing error on breadcrumb component where snapshot is null or undefined",
                type: 'bug'
            }
        ]
    },
    {
        version: {
            major:5,
            minor:0,
            patch:2
        },
        date: new Date(2024,3,28),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: ' Adding maxLength property on ngx-input-text component',
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 5,
            minor:0,
            patch:1
        },
        date: new Date(2024,3,22),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: 'Fixing primary colors background and text color',
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 5,
            minor: 0,
            patch:0
        },
        date: new Date(2024,3,19),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'NGX-lib: TreeShaking CSS, bundle size reduction',
                type:'update'
            }
        ]
    }
]