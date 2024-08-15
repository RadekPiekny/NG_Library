export interface IDragElementCssStyles {
    width: string;
    height: string;
    top: string;
    left: string;
    transform: string;
}

export interface IPointCoordinate {
    x: number;
    y: number;
}

export interface IPointDragPosition {
    startPosition: IPointCoordinate;
    currentPosition: IPointCoordinate;
    mouseY: number;
}

export interface IPosition {
    topFromPage: number;
    bottomFromPage: number;
    leftFromPage?: number;
    rightFromPage?: number;
}

export interface ISearchPageResult {
  id_page: string;
  page_name: string;
  id_page_parent: string;
}

export interface IPointCoordinate {
    x: number;
    y: number;
}

export interface ILock {
    config: IPropertyDisplay[];
    classList: ILockType[];
}

export interface ILockType {
    name: string;
    values?: any[];
    locked?: boolean;
}

export interface IPropertyDisplay extends ILockType {
    children?: IPropertyDisplay[]; // cannot do [key: string]: IPropertyDisplay TODO
}

export interface IHistoryDisabled {
    backward: boolean;
    forward: boolean;
}

export interface IACdata {
    moveoverComponentId: number;
    activeComponentsId: number[];
}