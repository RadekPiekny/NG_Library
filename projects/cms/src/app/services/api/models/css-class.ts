/* tslint:disable */
/* eslint-disable */
import { CssTag } from './css-tag';
export interface CssClass {
  cssClassId?: number;
  cssGroupId?: number;
  cssTags?: null | Array<CssTag>;
  description?: null | string;
  replacePattern?: null | string;
  shortDescription?: null | string;
  value?: null | string;
}
