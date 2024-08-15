/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const appkit4IconTwPlugin = require('./plugins/appkit4.icon.tw.plugin');
const textColorMatchingBackgroundTw = require('./plugins/text-color-matching-background.tw.plugin');

// this functions is dependend on color.scss that create css variables such as --color-red-300 etc.
function getColor(type,val) {
    return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
        if (val) {
          return `rgba(var(--color-${type}-${val}-rgb), ${opacityValue})`
        }
        return `rgba(var(--color-${type}-rgb), ${opacityValue})`
      }
      if (val) {
        return `var(--color-${type}-${val})`
      }
      return `var(--color-${type})`
    }
}

// this functions is dependend on color.scss that create css variables such as --color-primary-lighten-100 etc.
function getColorTintAdjusted(type,tintType,val) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      if (val) {
        return `rgba(var(--color-${type}-${tintType}-${val}-rgb), ${opacityValue})`
      }
      return `rgba(var(--color-${type}-${tintType}-rgb), ${opacityValue})`
    }
  }
}
const colorTints = [50,100,200,300,400,500,600,700,800,900];
const colorTintsAdjustedType = ['lighten','darken']; // we can move up or down by 100 or 200
const colorTintsAdjusted = [100,200]; // we can move up or down by 100 or 200
const rpColors = ['blue','orange','teal','pink','red','black','positive','negative','warning']; // for some reason I cannot make it work so in line 38+ I use individual colors instead of one object

function colorGenerate(color) {
    result = {};
    result['DEFAULT'] = getColor(color);
    colorTints.forEach(ct => {
        result[ct] = getColor(color,ct);
    })
    colorTintsAdjustedType.forEach(ctat => {
      colorTintsAdjusted.forEach(cta => {
        const key = `${ctat}-${cta}`;
        result[key] = getColorTintAdjusted(color,ctat,cta);
      })
    })
    return result;
}

module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: colorGenerate('primary'),
          blue: colorGenerate('blue'),
          orange: colorGenerate('orange'),
          teal: colorGenerate('teal'),
          pink: colorGenerate('pink'),
          red: colorGenerate('red'),
          black: colorGenerate('black'),
          positive: colorGenerate('positive'),
          negative: colorGenerate('negative'),
          warning: colorGenerate('warning'),
          neutral: {
            950: 'rgb(17, 17, 17)',
            900: 'rgb(25, 25, 25)',
            850: 'rgb(37, 37, 37)',
            800: 'rgb(48, 48, 48)',
            750: 'rgb(59, 59, 59)',
            700: 'rgb(71, 71, 71)',
            650: 'rgb(83, 83, 83)',
            600: 'rgb(94, 94, 94)',
            550: 'rgb(105, 105, 105)',
            525: 'rgb(117, 117, 117)',
            500: 'rgb(129, 129, 129)',
            475: 'rgb(140, 140, 140)',
            450: 'rgb(151, 151, 151)',
            400: 'rgb(163, 163, 163)',
            350: 'rgb(175, 175, 175)',
            300: 'rgb(186, 186, 186)',
            250: 'rgb(197, 197, 197)',
            200: 'rgb(209, 209, 209)',
            150: 'rgb(221, 221, 221)',
            100: 'rgb(232, 232, 232)',
            50: 'rgb(243, 243, 243)'
          },
        },
      },
    },
    plugins: [
      appkit4IconTwPlugin,
      textColorMatchingBackgroundTw
    ],
}