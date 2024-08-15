export interface PaginatorGuideForm {
    labels: boolean | null,
    from: number | null,
    step: number | null,
    itemsPerPage: number | null,
    totalItems: number | null,
    resetOnNewData: boolean | null
}