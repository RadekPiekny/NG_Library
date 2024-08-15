export interface NgxPaginationRange {
  current: number,
  from: number;
  to: number;
  step: number;
  itemsPerPage: number;
  totalItems: number;
  chars: number;
  width: Object;
  minPage: number;
  maxPage: number;
}

export interface _NgxPaginationRange {
  current: number,
  from: number;
  to: number;
  step: number;
  itemsPerPage: number;
  totalItems: {
    previous: number,
    current: number
  };
  chars: number;
  width: Object;
  minPage: number;
  maxPage: number;
}
