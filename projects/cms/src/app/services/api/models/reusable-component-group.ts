/* tslint:disable */
/* eslint-disable */
import { ReusableComponent } from './reusable-component';
export interface ReusableComponentGroup {
  description?: null | string;
  id?: number;
  name?: null | string;
  parentId?: null | number;
  reusableComponents?: null | Array<ReusableComponent>;
  type?: null | string;
}
