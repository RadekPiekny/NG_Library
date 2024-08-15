export interface FormatPositions {
    yearIndex: number[],
    monthIndex: number[],
    dayIndex: number[],
}

export enum InputDateAutoPeriods {
    DAY = 'D',
    MONTH = 'M',
    YEAR = 'Y',
}

export interface InputDateAutoDateV {
    year: string,
    month:string,
    day:string,
}

export interface InputDateAutoDateValidation {
    valid: boolean,
    canContinue: boolean, // user can start typing month with leading zero which would be invalid date but adding a number betweek 1-12 makes it valid
    err: string[],
    validFnc?: Function
}

export interface InputDateAutoDateValidationVal extends InputDateAutoDateValidation {
    value: string;
    index: number;
    symbols: number;
    type: InputDateAutoPeriods;
    width?: string;
}