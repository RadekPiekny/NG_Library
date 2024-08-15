export const appkitThemes = [
  'blue',
  'orange',
  'teal',
  'black',
  'red',
  'pink'
] as const;

export const appkitThemesColors = [
  { theme: 'blue', color: 'rgb(65, 83, 133)' },
  { theme: 'orange', color: 'rgb(208, 74, 2)' },
  { theme: 'teal', color: 'rgb(38, 119, 109)' },
  { theme: 'black', color: 'rgb(0, 0, 0)' },
  { theme: 'red', color: 'rgb(224, 48, 30)' },
  { theme: 'pink', color: 'rgb(217, 57, 84)' }
] as const;

export type TAppkitTheme = typeof appkitThemes[number];
