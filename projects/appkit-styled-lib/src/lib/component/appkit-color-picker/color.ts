export const textColorDark = "rgb(37,37,37)";
export const textColorLight = "rgb(255,255,255)";
export const themes = [
    'blue',
    'orange',
    'teal',
    'pink',
    'red'
] as const;

export const themesBase = [
    'primary',
    'neutral'
] as const;

export const colorIntensity: number[] = [...Array(9).keys()].map(key => (key +1) * 100);
export const tints = [...colorIntensity] as const;

export type TThemeColor = typeof themes[number];
export type TThemeBaseColor = typeof themesBase[number];
export type AllThemes = typeof themesBase[number] | typeof themes[number];
export type TThemeColorTint = typeof tints[number];

export const neutralLightColorIntensity: number[] = [...Array(9).keys()].map(key => key);
export const neutralDarkColorIntensity: number[] = [...Array(9).keys()].map(key => key + 9);
export const themeColorsClasses: IThemeColor[] = themes.map(themeColor => {
    const colors = colorIntensity.map(intensity => {
        return {
            bgClass: `bg-${themeColor}-${intensity}`,
            textColorClass: `color-${themeColor}-${intensity}`
        }
    })
    return {
        name: themeColor,
        colors: colors
    }
});

export const primaryColorClasses: IThemeColor = {
    name: 'primary',
    colors: colorIntensity.map(intensity => {
        return {
            bgClass: `bg-primary-${intensity}`,
            textColorClass: `color-primary-${intensity}`
        }
    })
}


export const neutralLightColorClasses: IThemeColor = {
    name: 'neutral',
    colors: neutralLightColorIntensity.map(intensity => {
        return {
            bgClass: `bg-neutral-${intensity}`,
            textColorClass: `color-neutral-${intensity}`
        }
    })
}

export const neutralDarkColorClasses: IThemeColor = {
    name: 'neutral',
    colors: neutralDarkColorIntensity.map(intensity => {
        return {
            bgClass: `bg-neutral-${intensity}`,
            textColorClass: `color-neutral-${intensity}`
        }
    })
}

export interface IThemeColorDetail {
    bgClass: string;
    textColorClass: string;
}
export interface IThemeColor {
    name: TThemeColor | TThemeBaseColor,
    colors: IThemeColorDetail[]
}
export interface IColorBrand {
    type: TThemeColor;
    tint: TThemeColorTint;
}