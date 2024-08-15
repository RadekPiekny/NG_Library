export interface TabGuideForm {
    tabs: {
        text: string;
        active: boolean;
    }[]
    filled: boolean | null;
    width: string | '';
    componentWidth: string | '';
    justifyContent: string | '';
    tabGap: string | '';
    underlineTrack: boolean | '';
    disabled: boolean | null;
}

export enum TabVariation {
    Default = 'default',
    Neutral = 'neutral',
    Positive = 'positive',
    Negative = 'negative',
    Warning = 'warning',
}
  
type TTabVariation = typeof TabVariation[keyof typeof TabVariation];
export const tabVariations: TTabVariation[] = Object.values(TabVariation);