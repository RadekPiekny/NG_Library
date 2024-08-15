export interface AccordionGuideForm {
    variation: boolean,
    state: 'expand' | 'collapse' | null,
    type: 'item' | 'button' | null;
}