import { ReleaseData } from "./release.model";

export const releaseDataVer6: ReleaseData[] = [
    {
        version: {
            major: 6,
            minor: 8,
            patch: 1
        },
        date: new Date(2024,6,27),
        breakingChange: false,
        visible: true,
        features: [
            {
                breakingChange: false,
                description: "Badge - fix issue where badge without any sentiment value would not display primary color border as it should",
                type: 'bug'
            },
        ]
    },
    {
        version: {
            major: 6,
            minor: 8,
            patch: 0
        },
        date: new Date(2024,6,27),
        breakingChange: false,
        visible: true,
        features: [
            {
                breakingChange: false,
                description: "Tab - add input underlineTrack: boolean that switch on/off underline track for underline type of tab. Reasoning is that there is possibility to use tab in a header/nav in which underline track is not desirable. ",
                type: 'update'
            },
        ]
    },
    {
        version: {
            major: 6,
            minor: 7,
            patch: 0
        },
        date: new Date(2024,6,25),
        breakingChange: false,
        visible: true,
        features: [
            {
                breakingChange: false,
                description: "Tab - fixed 1px underline not being aligned with active bottom border. Update default height to 32px",
                type: 'update'
            },
        ]
    },
    {
        version: {
            major: 6,
            minor: 6,
            patch: 0
        },
        date: new Date(2024,6,24),
        breakingChange: false,
        visible: true,
        features: [
            {
                breakingChange: false,
                description: "Input text -> maxlength input now have additional property 'displayMaxLength' which display info in the top right corner. Default value is true and it will display only if there is non-null maxlength",
                type: 'update'
            },
        ]
    },
    {
        version: {
            major: 6,
            minor: 5,
            patch: 0
        },
        date: new Date(2024,6,20),
        breakingChange: false,
        visible: true,
        features: [
            {
                breakingChange: false,
                description: "Ngx option moved out of select into separate individual module due to preparation for auto-complete component",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Select have additional size option -> 'sm' which translates to 40px height",
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 4,
            patch: 2
        },
        date: new Date(2024,6,17),
        breakingChange: false,
        visible: true,
        features: [
            {
                breakingChange: false,
                description: "Select with multi option had a bug in which clicking on the checkbox itself did not change the state of the checkbox even tho the click itself was working. The checkbox now behaves as expected",
                type: 'bug'
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 4,
            patch: 1
        },
        date: new Date(2024,6,13),
        breakingChange: false,
        visible: false,
        features: [
            {
                breakingChange: false,
                description: "Inputs valueChange output fix",
                type: 'bug'
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 4,
            patch: 0
        },
        date: new Date(2024,6,13),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: "Tab component - text alignment to center",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "TextArea, input text, input number with new @Input() Focus: boolean which does focus/blur inner input element",
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 3,
            patch: 0
        },
        date: new Date(2024,6,11),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: "Tab component - sizing,padding update",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Tab component - underline background color with more transparency",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Tab component - text color contrast fix",
                type: 'bug'
            },
        ]
    },
    {
        version: {
            major: 6,
            minor: 2,
            patch: 0
        },
        date: new Date(2024,6,11),
        breakingChange: false,
        features: [
            {
                breakingChange: false,
                description: "Visual update to tab component: disable state opacity/no hover effects with disable",
                type: 'update'
            },
        ]
    },
    {
        version: {
            major: 6,
            minor: 1,
            patch: 0
        },
        date: new Date(2024,6,10),
        breakingChange: true,
        features: [
            {
                breakingChange: false,
                description: "Modal background gets blurred",
                type: 'update'
            },
            {
                breakingChange: false,
                description: "Component fonts update",
                type: 'update'
            },
            {
                breakingChange: true,
                description: "Breadcrumb -> removed fromURL input, There needs to be an element inside ngx-bc-item with tabindex to get component styling. Content projection fix => Any content was projected as text only.",
                type: 'update'
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 8
        },
        date: new Date(2024,5,3),
        breakingChange: true,
        features: [
            {
                description: 'leftIcon input for select, formfield, input date, input-file now requires whole string such as icon-search-outline instead of only search-outline',
                type: "update",
                reason: 'Since there are tree shaking on icons using tailwind the library can pick up only whole string as icons just like any other class',
                breakingChange: true
            },
            {
                description: 'Accordion item btn set to full width',
                type: "bug",
                reason: 'The accordion item was wider then its content',
                breakingChange: false
            },
            {
                description: 'Badge neutral visual update for both dark/light mode',
                type: "bug",
                reason: 'The accordion item was wider then its content',
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 7
        },
        date: new Date(2024,4,31),
        breakingChange: false,
        features: [
            {
                description: 'Tab component re-design.',
                type: "update",
                breakingChange: false
            },
            {
                description: 'Rich text re-design. Newly added input for expanded(boolean)',
                type: "update",
                breakingChange: false
            },
            {
                description: 'Updte tailwind configurations for more fonts type according to branding policy. There are now more variations of Helvetica Neue',
                type: "update",
                breakingChange: false
            },
            {
                description: 'Menu container component added. ',
                type: "update",
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 6
        },
        date: new Date(2024,4,6),
        breakingChange: false,
        features: [
            {
                description: 'Badge smaller visual updates',
                type: "update",
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 5
        },
        date: new Date(2024,4,2),
        breakingChange: false,
        features: [
            {
                description: 'Accordion visual update. Accordion no longer overflows its content when changing state',
                type: "update",
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 3
        },
        date: new Date(2024,4,2),
        breakingChange: false,
        features: [
            {
                description: 'Major visual update for rich text',
                type: "update",
                breakingChange: false
            },
            {
                description: 'Tooltips visual update. There is a subtle blur effect in the background',
                type: "update",
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 2
        },
        date: new Date(2024,3,26),
        breakingChange: false,
        features: [
            {
                description: 'CSS variables updated with primary hash as well as rgb strings',
                type: "update",
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 1
        },
        date: new Date(2024,3,26),
        breakingChange: false,
        features: [
            {
                description: 'Tooltips small visual update',
                type: "update",
                breakingChange: false
            }
        ]
    },
    {
        version: {
            major: 6,
            minor: 0,
            patch: 0
        },
        date: new Date(2024,3,25),
        breakingChange: true,
        features: [
            {
                description: 'Angular version 17 update',
                type: "update",
                breakingChange: true
            }
        ]
    }
];