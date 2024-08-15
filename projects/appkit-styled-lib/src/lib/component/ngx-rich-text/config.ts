import { ConnectionPositionPair } from '@angular/cdk/overlay';

export interface INgxRichTextConfigFormat {
  allow: boolean;
  order: number;
  desc: string;
  name: string;
  active?: boolean;
}

export interface INgxRichTextConfig {
  bold: INgxRichTextConfigFormat;
  underline: INgxRichTextConfigFormat;
  strikeThrough: INgxRichTextConfigFormat;
  removeFormat: INgxRichTextConfigFormat;
  justifyLeft: INgxRichTextConfigFormat;
  justifyCenter: INgxRichTextConfigFormat;
  justifyRight: INgxRichTextConfigFormat;
  justifyFull: INgxRichTextConfigFormat;
  fontSize: INgxRichTextConfigFormat;
  createLink: INgxRichTextConfigFormat;
  colorPicker: INgxRichTextConfigFormat;
  classListEditor: string[];
}

export const defaultNgxRichTextConfig: INgxRichTextConfig = {
  bold: {
    allow: true,
    order: 1,
    desc: 'Bold',
    name: 'bold',
    active: false
  },
  underline: {
    allow: true,
    order: 2,
    desc: 'Underline',
    name: 'underline',
    active: false
  },
  strikeThrough: {
    allow: true,
    order: 3,
    desc: 'Strike through',
    name: 'strikeThrough',
    active: false
  },
  removeFormat: {
    allow: true,
    order: 4,
    desc: 'Clear formatting',
    name: 'removeFormat',
    active: false
  },
  fontSize: {
    allow: true,
    order: 5,
    desc: 'Change font size',
    name: 'fontSize',
    active: false
  },
  justifyLeft: {
    allow: true,
    order: 6,
    desc: 'Left justify',
    name: 'justifyLeft',
    active: false
  },
  justifyCenter: {
    allow: true,
    order: 7,
    desc: 'Center justify',
    name: 'justifyCenter',
    active: false
  },
  justifyRight: {
    allow: true,
    order: 8,
    desc: 'Right justify',
    name: 'justifyRight',
    active: false
  },
  justifyFull: {
    allow: true,
    order: 9,
    desc: 'Full justify',
    name: 'justifyFull',
    active: false
  },
  createLink: {
    allow: true,
    order: 10,
    desc: 'Link',
    name: 'CreateLink',
    active: false
  },
  colorPicker: {
    allow: true,
    order: 11,
    desc: 'Pick color',
    name: 'colorPicker',
    active: false
  },
  classListEditor: []
};

export const defaultPosition = [
  new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'bottom' }
  ),
  new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' }
  )
];

export const dropdownListItems = [
  { text: 'small 2X', value: 'xx-small' },
  { text: 'small X', value: 'x-small' },
  { text: 'small', value: 'small' },
  { text: 'medium', value: 'medium' },
  { text: 'large', value: '28px' },
  { text: 'large X', value: '38px' },
  { text: 'large 2X', value: '45px' }
];

export enum SelectedLinkState {
  noLink = 'noLink',
  atStart = 'atStart',
  singleLink = 'singleLink',
  atEnd = 'atEnd',
  atBoth = 'atBoth',
  between = 'between'
}
