import { NgxPaginationRange } from "./ngx-pagination.model";

export function ngxPaginationDisabledNext(v: NgxPaginationRange, current: number): boolean {
    if (current + v.step > v.maxPage) {
      return true;
    }
    return false
}

export function ngxPaginationDisabledPrevious(v: NgxPaginationRange, current: number): boolean {
    if (current <= v.minPage) {
      return true;
    }
    return false
  }