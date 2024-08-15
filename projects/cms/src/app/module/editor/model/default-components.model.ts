import { WebBlocksComponent } from "projects/cms/src/app/services/api/models";
import { Guid } from 'guid-typescript';

export function generateDefaultButton(): WebBlocksComponent {
    return {
        elementBase: {
            className: 'button',
            cssClass: [
                { className: 'bg-pink-400'},
                { className: 'p-3'},
                { className: 'w-fit'},
                { className: 'transition-all'},
                { className: 'relative'}
            ],
            attributes: [
                {
                    name: 'innerText',
                    value: 'button'
                },
                {
                    name: 'id',
                    value: Guid.create().toString()
                }
            ],
            domRect: {},
        },
        children: []
    }
}

export function generateDefaultDiv(): WebBlocksComponent {
    return {
        elementBase: {
            className: 'div',
            cssClass: [
                { className: 'bg-primary'},
                { className: 'p-5'},
                { className: 'flex'},
                { className: 'flex-col'},
                { className: 'justify-start'},
                { className: 'items-start' },
                { className: 'w-full'},
                { className: 'transition-all'},
                { className: 'relative'}
            ],
            attributes: [
                {
                    name: 'id',
                    value: Guid.create().toString()
                }
            ],
            domRect: {},
            files: []
        },
        children: []
    }
}

export function generateDefaultP(): WebBlocksComponent {
    return {
        elementBase: {
            className: 'p',
            cssClass: [
                { className: 'p-5'},
                { className: 'w-full'},
                { className: 'relative'}
            ],
            attributes: [
                {
                    name: 'innerHTML',
                    value: 'some text'
                },
                {
                    name: 'id',
                    value: Guid.create().toString()
                }
            ],
            domRect: {},
            files: []
        },
        children: []
    }
}

export function generateDefaultImage(): WebBlocksComponent {
    return {
        elementBase: {
            className: 'img',
            cssClass: [
                { className: 'relative'}
            ],
            attributes: [
                {
                    name: "src",
                    value: 'assets/testImage.png'
                },
                {
                    name: 'id',
                    value: Guid.create().toString()
                }
            ],
            domRect: {},
            files: [
                {
                    name: 'image',
                    mimeType: 'png',
                    size: 10000
                }
            ]
        },
        children: []
    }
}

export function generateDefaultLogo(): WebBlocksComponent {
    return {
        elementBase: {
            className: 'some-logo',
            cssClass: [
                { className: 'relative'}
            ],
            attributes: [
                {
                    name: "height",
                    value: '50px'
                },
                {
                    name: 'onlyText',
                    value: 'false'
                },
                {
                    name: 'id',
                    value: Guid.create().toString()
                }
            ],
            domRect: {},
        },
        children: []
    }
}

export const defaultElements: IGenericComponent[] = [
    {
        name: 'button',
        fnc: generateDefaultButton,
        obj: generateDefaultButton()
    },
    {
        name: 'container',
        fnc: generateDefaultDiv,
        obj: generateDefaultDiv()
    },
    {
        name: 'text',
        fnc: generateDefaultP,
        obj: generateDefaultP()
    },
    {
        name: 'image',
        fnc: generateDefaultImage,
        obj: generateDefaultImage()
    },
    {
        name: 'logo',
        fnc: generateDefaultLogo,
        obj: generateDefaultLogo()
    }
]

export interface IGenericComponent {
    name: string;
    fnc: Function;
    obj: WebBlocksComponent
}