export interface IElSelect {
  list: any[];
  multi?: boolean;
  search?: boolean;
  outerSearch?: boolean;
  selectMessage: string;
  label?: string;
  selectProperty: string;
  displayProperty?: string[];
  displayPropertySeparator?: string;
  tags?: ITag;
  backDrop?: boolean;
}

export interface ITag {
  classList: string[];
}

export const defaultElSelect: IElSelect = {
  list: [],
  multi: false,
  search: false,
  backDrop: false,
  selectMessage: 'select...',
  displayPropertySeparator: ' - ',
  selectProperty: 'object'
};

