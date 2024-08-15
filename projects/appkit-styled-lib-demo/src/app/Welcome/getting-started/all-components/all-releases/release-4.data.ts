import { ReleaseData } from "./release.model";

export const releaseDataVer4: ReleaseData[] = [
    {
        version: {
            major: 4,
            minor:8,
            patch:1
        },
        date: null,
        breakingChange: false,
        features: [
            {
                breakingChange: true,
                description:'Modify ngx-select component to show only a limited number of items before scroll',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:8,
            patch:0
        },
        date: new Date(2024,3,4),
        breakingChange: false,
        features: [
            {
                breakingChange: true,
                description:'Ngx-select container changing overlay height calculations',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:8
        },
        date: new Date(2024,2,28),
        breakingChange: false,
        features: [
            {
                breakingChange: true,
                description:'On ngx-select component dynamically adjust the position of an overlay when an option changes',
                type:'bug'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:7
        },
        date: new Date(2024,2,28),
        breakingChange: false,
        features: [
            {
                breakingChange: true,
                description:'Removing unwanted code form ngx-select component',
                type:'bug'
            }
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
                breakingChange: true,
                description:'Ngx-select change name of the interface to "DOMRect"',
                type:'bug'
            },
            {
                breakingChange: true,
                description:'Ngx-select update component design and changing max-height',
                type:'bug'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:5
        },
        date: new Date(2024,2,26),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Updated ngx-tab-item to have disabled param',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:4
        },
        date: new Date(2024,2,26),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Removed the functionality that dynamically disabled buttons by manipulating the parent DOM element and updated button transparency based on appkit 0.32 -> 0.4 though',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:3
        },
        date: new Date(2024,2,22),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Ngx-tab design changes',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:2
        },
        date: new Date(2024,2,22),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Ngx-tab fixing input on the justify property',
                type:'bug'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:7,
            patch:1
        },
        date: new Date(2024,2,22),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Ngx-tab adding justify input property',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:6,
            patch:2
        },
        date: new Date(2024,2,16),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Change of reset icon color in input text based on AICT',
                type:'update'
            },
            {
                breakingChange: false,
                description:'Update azure-pipelines.yml for Azure Pipelines',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:6,
            patch:1
        },
        date: new Date(2024,2,14),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Remove z-index from ::after element in ngx-checkbox to avoid interfering with stacking context of other elements',
                type:'bug'
            },
            {
                breakingChange: false,
                description:'Implemented radio button functionality to output selected values, trigger value change events, and handle the checked input',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:6,
            patch:0
        },
        date: new Date(2024,2,14),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Ngx-tab fixing input of the added justify property',
                type:'update'
            },
            {
                breakingChange: false,
                description: 'Updated cms, added logos to demo, updated css of component-showcase and ngx-rich-text component',
                type:'update'
            },
            {
                breakingChange: false,
                description: 'Added multiple select option to ngx-select guide',
                type: 'update'
            }  
        ]
    },
    {
        version: {
            major: 4,
            minor:5,
            patch: 9
        },
        date: new Date(2024,1,29),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Resolved issue with the select element within a flex container, preventing placeholder text from overlapping beneath the chevron icon and fixed breadCrump url routing on click',
                type:'bug'
            }
        ]
    },
    {
        version: {
            major: 4,
            minor:5,
            patch: 8
        },
        date: new Date(2024,1,25),
        breakingChange: false,
        features: [
            {
                breakingChange: true,
                description: 'Adding reset button to be by default on ngx-select with input search',
                type: 'bug'
            }
        ]
    },
    {
        version: {
            major: 4,
            minor: 4,
            patch: 7
        },
        date: new Date(2024,1,24),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: 'Removing unused snackBars form pop-up service',
                type: 'update'
            },
            {
                breakingChange: false,
                description: 'Update import of snackbarType',
                type:'update'
            },
            {
                breakingChange: false,
                description: 'Corrected the initial state of the button, added button styling using Tailwind CSS import, and resolved service snacks functionality',
                type:'bug'
            },
            {
                breakingChange: false,
                description: "Adding multi selector to ngx-checkbox",
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 4,
            minor: 5,
            patch: 6
        },
        date: new Date(2024,1,15),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: 'Ngx-checkbox design color change',
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 4,
            minor: 5,
            patch: 5
        },
        date: new Date(2024,1,15),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: 'Added ConnectedPosition property to ngx-menu and adjusted position',
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 4,
            minor: 5,
            patch:4
        },
        date: new Date(2023,12,15),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: 'Implemented automatic date updating on ngx-input-date',
                type:'update'
            }
        ]
    },
    {
        version: {
            major:4,
            minor:5,
            patch:3
        },
        date: new Date(2023,12,13),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description:'Fixed bug on tooltip that would duplicate cdk pane in the container',
                type:'bug'
            }
        ]
    },
    
]