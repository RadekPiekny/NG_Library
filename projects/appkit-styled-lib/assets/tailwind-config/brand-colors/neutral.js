// Importing the textColors module (replace the path with the correct one)
import { textColors } from './text-colors.js';

// Function to convert hex to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

// Defining the neutralColors object
export const neutralColors = {
  50: {
    hash: '#f3f3f3',
    textColor: textColors.dark,
    rgb: hexToRgb('#f3f3f3'),
    main: false
  },
  100: {
    hash: '#e8e8e8',
    textColor: textColors.dark,
    rgb: hexToRgb('#e8e8e8'),
    main: false
  },
  150: {
    hash: '#dddddd',
    textColor: textColors.dark,
    rgb: hexToRgb('#dddddd'),
    main: false
  },
  200: {
    hash: '#d1d1d1',
    textColor: textColors.dark,
    rgb: hexToRgb('#d1d1d1'),
    main: false
  },
  250: {
    hash: '#c5c5c5',
    textColor: textColors.dark,
    rgb: hexToRgb('#c5c5c5'),
    main: false
  },
  300: {
    hash: '#bababa',
    textColor: textColors.dark,
    rgb: hexToRgb('#bababa'),
    main: true
  },
  350: {
    hash: '#afafaf',
    textColor: textColors.dark,
    rgb: hexToRgb('#afafaf'),
    main: false
  },
  400: {
    hash: '#a3a3a3',
    textColor: textColors.dark,
    rgb: hexToRgb('#a3a3a3'),
    main: false
  },
  450: {
    hash: '#979797',
    textColor: textColors.dark,
    rgb: hexToRgb('#979797'),
    main: false
  },
  475: {
    hash: '#8c8c8c',
    textColor: textColors.light,
    rgb: hexToRgb('#8c8c8c'),
    main: false
  },
  500: {
    hash: '#818181',
    textColor: textColors.light,
    rgb: hexToRgb('#818181'),
    main: false
  },
  525: {
    hash: '#757575',
    textColor: textColors.light,
    rgb: hexToRgb('#757575'),
    main: false
  },
  550: {
    hash: '#696969',
    textColor: textColors.light,
    rgb: hexToRgb('#696969'),
    main: false
  },
  600: {
    hash: '#5e5e5e',
    textColor: textColors.light,
    rgb: hexToRgb('#5e5e5e'),
    main: false
  },
  650: {
    hash: '#535353',
    textColor: textColors.light,
    rgb: hexToRgb('#535353'),
    main: false
  },
  700: {
    hash: '#474747',
    textColor: textColors.light,
    rgb: hexToRgb('#474747'),
    main: true
  },
  750: {
    hash: '#3b3b3b',
    textColor: textColors.light,
    rgb: hexToRgb('#3b3b3b'),
    main: false
  },
  800: {
    hash: '#303030',
    textColor: textColors.light,
    rgb: hexToRgb('#303030'),
    main: false
  },
  850: {
    hash: '#252525',
    textColor: textColors.light,
    rgb: hexToRgb('#252525'),
    main: false
  },
  900: {
    hash: '#191919',
    textColor: textColors.light,
    rgb: hexToRgb('#191919'),
    main: false
  },
  950: {
    hash: '#111111',
    textColor: textColors.light,
    rgb: hexToRgb('#111111'),
    main: false
  }
};
