import { WebBlocksComponent, ElementBase, ReusableComponent } from "projects/cms/src/app/services/api/models";

export const componentDragPositions = ['before', 'after', 'in'] as const;
export type TComponentDragPositions = typeof componentDragPositions[number];

export interface IWebBlocksComponentDropping {
    position: TComponentDragPositions;
    component: WebBlocksComponent;
    target: WebBlocksComponent;
}

export function generateDefaultPage(template: boolean = true): ReusableComponent {
    return {
        name: template ? 'Template name' : 'Page name',
        type: template ? 'template' : 'page',
        webBlocksComponent: {
            elementBase: {
                id: 0,
                className: 'div',
                cssClass: [
                    { className: 'flex' },
                    { className: 'flex-col' },
                    { className: 'justify-start' },
                    { className: 'items-start' },
                ],
                domRect: {},
            },
            children: []
        }
    }
}

export function generateDefaultWebBlocksComponent(): ReusableComponent {
    return {
        name: 'Component name',
        type: 'component',
        webBlocksComponent: null
    }
}