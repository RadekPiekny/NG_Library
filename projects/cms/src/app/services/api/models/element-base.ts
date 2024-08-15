/* tslint:disable */
/* eslint-disable */
import { DomRect } from './dom-rect';
import { ElementAttribute } from './element-attribute';
import { ElementCssClass } from './element-css-class';
import { FileModel } from './file-model';
export interface ElementBase {
  attributes?: null | Array<ElementAttribute>;
  className?: null | string;
  cssClass?: null | Array<ElementCssClass>;
  domRect?: DomRect;
  files?: null | Array<FileModel>;
  id?: number;
  style?: null | string;
}
