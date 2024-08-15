/* tslint:disable */
/* eslint-disable */
import { ElementBase } from './element-base';
export interface WebBlocksComponent {
  children?: null | Array<WebBlocksComponent>;
  elementBase?: ElementBase;
  elementBaseId?: number;
  id?: number;
  parentId?: null | number;
  reusableComponentId?: null | number;
  rootId?: null | number;
}
