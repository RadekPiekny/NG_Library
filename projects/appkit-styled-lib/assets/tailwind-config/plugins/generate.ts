import { blackColors } from '../brand-colors/black';
import { blueColors } from '../brand-colors/blue';
import { orangeColors } from '../brand-colors/orange';
import { pinkColors } from '../brand-colors/pink';
import { redColors } from '../brand-colors/red';
import { tealColors } from '../brand-colors/teal';
import { statusNegativeColors } from '../brand-colors/status-negative';
import { statusPositiveColors } from '../brand-colors/status-positive';
import { statusWarningColors } from '../brand-colors/status-warning';
import { neutralColors } from '../brand-colors/neutral';
import { primaryColors } from '../brand-colors/primary';

export const rpColors = [
  {black: blackColors},
  {blue: blueColors},
  {orange: orangeColors},
  {pink: pinkColors},
  {red: redColors},
  {teal: tealColors},
  {negative: statusNegativeColors},
  {positive: statusPositiveColors},
  {warning: statusWarningColors},  
  {neutral: neutralColors},
  {primary: primaryColors}
];

// Function to convert color data into CSS rules
export const convertColorToCSS = (colorData, className, colorKey) => {
  const holyfuckinghell = {};
  Object.entries(colorData).forEach(([key, value]) => {
    const selector = `.${className}-${key}`;
    const styles = { 
      color: `${(value as any).textColor}`,
      backgroundColor: `rgba(${(value as any).rgb}, var(--tw-bg-opacity))`
    };
    holyfuckinghell[selector] = styles;
  });
  const mainObject = Object.values(colorData).find((color) => (color as any).main);
  const mainObjectIndex = Object.values(colorData).findIndex((color) => (color as any).main);
  if (mainObject) {
    let lighten100;
    let lighten200;
    let darken100;
    let darken200;


    if (colorKey !== 'primary') {
      holyfuckinghell[`.${className}`] = { 
        color: `${(mainObject as any).textColor}`,
        backgroundColor: `rgba(${(mainObject as any).rgb}, var(--tw-bg-opacity))`
      };
      lighten100 = Object.values(colorData)[mainObjectIndex-1];
      lighten200 = Object.values(colorData)[mainObjectIndex-2];
      darken100 = Object.values(colorData)[mainObjectIndex+1];
      darken200 = Object.values(colorData)[mainObjectIndex+2];
      
    } else {
      holyfuckinghell[`.${className}`] = { 
        color: 'var(--color-primary-text)',
        backgroundColor: 'var(--color-primary-rgb)',
      };
      lighten100 = {rgb: 'var(--color-primary-lighten-100-rgb)', textColor: 'var(--color-primary-lighten-100-text)'};
      lighten200 = {rgb: 'var(--color-primary-lighten-200-rgb)', textColor: 'var(--color-primary-lighten-200-text)'};
      darken100 = {rgb: 'var(--color-primary-darken-100-rgb)', textColor: 'var(--color-primary-darken-100-text)'};
      darken200 = {rgb: 'var(--color-primary-darken-200-rgb)', textColor: 'var(--color-primary-darken-200-text)'};
    }

    holyfuckinghell[`.${className}-lighten-100`] = { 
      color: `${lighten100.textColor}`,
      backgroundColor: `rgba(${lighten100.rgb}, var(--tw-bg-opacity))`
    };
    holyfuckinghell[`.${className}-lighten-200`] = { 
      color: `${lighten200.textColor}`,
      backgroundColor: `rgba(${lighten200.rgb}, var(--tw-bg-opacity))`
    };
    holyfuckinghell[`.${className}-darken-100`] = { 
      color: `${darken100.textColor}`,
      backgroundColor: `rgba(${darken100.rgb}, var(--tw-bg-opacity))`
    };
    holyfuckinghell[`.${className}-darken-200`] = { 
      color: `${darken200.textColor}`,
      backgroundColor: `rgba(${darken200.rgb}, var(--tw-bg-opacity))`
    };
  }
  return holyfuckinghell;
};

// Iterate through rpColors and generate CSS rules
export const textColorMatchingBackgroundTwResult = {};
rpColors.forEach((colorGroup) => {
  const colorKey = Object.keys(colorGroup)[0];
  const className = `bg-${colorKey}`;
  const colorData = colorGroup[colorKey];
  const cssRules = convertColorToCSS(colorData, className, colorKey);
  Object.assign(textColorMatchingBackgroundTwResult, cssRules);
});

console.log(textColorMatchingBackgroundTwResult);