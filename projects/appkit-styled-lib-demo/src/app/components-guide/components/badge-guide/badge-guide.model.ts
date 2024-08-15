export interface BadgeGuideForm {
    variation: 'Inline' | 'Contained' | null,
    filled: boolean | null,
    sentiment: BadgeSentiment | null,
    text: string | null
}

export enum BadgeSentiment {
    Default = 'default',
    Neutral = 'neutral',
    Positive = 'positive',
    Negative = 'negative',
    Warning = 'warning',
}
  
type TBadgeSentiment = typeof BadgeSentiment[keyof typeof BadgeSentiment];
export const badgeSentiments: TBadgeSentiment[] = Object.values(BadgeSentiment);