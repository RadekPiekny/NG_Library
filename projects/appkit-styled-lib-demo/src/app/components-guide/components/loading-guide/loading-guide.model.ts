export interface LoadingGuideForm {
    progress: number | null,
    compact: boolean | null,
    indeterminate: boolean | null,
    type: 'line' | 'circle' | null
}