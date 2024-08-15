export interface ButtonGuideForm {
    variation: ButtonVariation | null,
    text: string | null,
    disabled: boolean | null;
    compact: boolean | null;
    icon: boolean | null;
    iconOnly: boolean | null;
    negative: boolean | null;
}

export enum ButtonVariation {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
    Text = 'text',
    transparent = 'transparent'
}
  
type TButtonVariation = typeof ButtonVariation[keyof typeof ButtonVariation];
export const buttonVariations: TButtonVariation[] = Object.values(ButtonVariation);