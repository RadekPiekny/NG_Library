import { FormatPositions, InputDateAutoDateV, InputDateAutoDateValidation, InputDateAutoDateValidationVal, InputDateAutoPeriods } from "./input-auto-date.model";

export function findAllIndicesOfSubstring(formatString: string, subString: string): number[] {
    const separator = findDateSeparator(formatString);
    if (separator) {
      const formatStringWithoutSeparators = replaceAllOccurrences(formatString,separator,"");
      const indices: number[] = [];
      let index = -1;
    
      while ((index = formatStringWithoutSeparators.indexOf(subString, index + 1)) !== -1) {
        indices.push(index);
      }
      return indices;
    }
    return []
}

export function dateFormatPosition(format: string): FormatPositions {
    const monthIndex = findAllIndicesOfSubstring(format,InputDateAutoPeriods.MONTH);
    const dayIndex = findAllIndicesOfSubstring(format,InputDateAutoPeriods.DAY);
    const yearIndex = findAllIndicesOfSubstring(format,InputDateAutoPeriods.YEAR);
    return {
      yearIndex,
      monthIndex,
      dayIndex
    }
}

export function getSt(format: string, position: number,v: InputDateAutoDateV, index: number): InputDateAutoDateValidationVal {
    let validation: InputDateAutoDateValidation;
    switch (format[position]) {
        case InputDateAutoPeriods.YEAR:
            validation = validateYear(parseInt(v.year));
            return {
                value: v.year,
                symbols: 4,
                validFnc: validateYear,
                type: InputDateAutoPeriods.YEAR,
                ...validation,
                index,
                width: '4ch'
            }
        case InputDateAutoPeriods.MONTH:
            validation = validateMonth(v.month)
            return {
                value: v.month,
                symbols: 2,
                validFnc: validateMonth,
                type: InputDateAutoPeriods.MONTH,
                ...validation,
                index,
                width: '2ch'
            }
        default:
            validation = validateDay(v.day)
            return {
                value: v.day,
                symbols: 2,
                validFnc: validateDay,
                type: InputDateAutoPeriods.DAY,
                ...validation,
                index,
                width: '2ch'
            }
    }
}

export function getMiddle(v: InputDateAutoDateV,presentKeys: string[]):string {
  for (const key in v) {
    if (!presentKeys.includes(key)) {
        return v[key as keyof InputDateAutoDateV];
    }
  }
  return ''; // Handle the case when no keys are missing.
}



export function findDateSeparator(format: string): string | null {
    // Match any non-alphanumeric character that appears between year, month, and day placeholders
    const separatorMatch = format.match(/[^A-Za-z0-9]+/);
    return separatorMatch ? separatorMatch[0] : null;
}

export function replaceAllOccurrences(input: string, search: string, replacement: string): string {
    // Use a regular expression with the global flag to replace all occurrences
    const regex = new RegExp(search, "g");
    return input.replace(regex, replacement);
}

export function findIndexOfFirstDifferentChar(inputString: string,separator: string): number {
    let separators = 0;
    if (inputString.length === 0) {
      return -1; // No different character found in an empty string
    }
  
    const firstChar = inputString[0];
    for (let i = 1; i < inputString.length; i++) {
        if (inputString[i] === separator) {
            separators += 1;
            continue;
        }
      if (inputString[i] !== firstChar && inputString[i] !== separator) {
        return i + separators;
      }
    }
  
    return -1; // If all characters are the same as the first one
}

export function getPeriod(v: number, indexes: number[]) {
    const str = v.toString();
    const x = indexes.map(i => {
        return str[i]
    })
    const res = x.join('');
    return parseInt(res);
}

export function validateYear(year: number): InputDateAutoDateValidation {
    const maxErr = "Maximum year is 2099";
    const minErr = "Minimum year is 1900";
    const validation: InputDateAutoDateValidation = {
      err: [],
      valid: true,
      canContinue: true
    }
    if (isNaN(year)) {
      validation.valid = false;
      validation.err.push("Year is empty");
      validation.canContinue = true;
      return validation
    }
    const yearStr = year.toString();
    
    if (parseInt(yearStr[0]) > 2) {
        validation.valid = false;
        validation.err.push(maxErr);
        validation.canContinue = false;
        return validation
    }
    if (yearStr.length >= 2 && parseInt(yearStr.substring(0,2)) <= 18) {
      validation.valid = false;
      validation.err.push(minErr);
      validation.canContinue = false;
      return validation
    }
    if (yearStr.length >= 2 && parseInt(yearStr.substring(0,2)) >= 21) {
      validation.valid = false;
      validation.err.push(maxErr);
      validation.canContinue = false;
      return validation
    }
    if (yearStr.length == 1 && parseInt(yearStr.substring(0,1)) > 2) {
      validation.valid = false;
      validation.err.push(maxErr);
      validation.canContinue = false;
      return validation
    }
    if (yearStr.length == 4 && year > 1900 && year < 2099) {
      validation.valid = true;
      validation.canContinue = false;
      return validation
    }
    return validation
}

export function validateMonth(month: string): InputDateAutoDateValidation {
    const validation: InputDateAutoDateValidation = {
      err: [],
      valid: true,
      canContinue: true
    }
    if (!month || month === "") {
      validation.valid = false;
      validation.err.push("Month is empty");
      return validation
    }
    const monthNum = parseInt(month);
    if (isNaN(monthNum)) {
      validation.valid = false;
      validation.err.push("Month is not number");
      return validation
    }
    if (month.length === 2 && month[0] === '0') {
      validation.valid = true;
      validation.canContinue = false;
      return validation
    }
    if (monthNum < 0) {
        validation.valid = false;
        validation.canContinue = false;
        validation.err.push("Month cannot be negative");
        return validation
    }
    if (monthNum === 0) {
        validation.valid = false;
        validation.canContinue = true;
    }
    if (monthNum === 1) {
        validation.valid = true;
        validation.canContinue = true;
    }
    if (monthNum > 1 && monthNum < 10) {
      validation.valid = true;
      validation.canContinue = false;
    }
    if (monthNum > 9 && monthNum < 13) {
        validation.valid = true;
        validation.canContinue = false;
      }
    if (monthNum > 12) {
        validation.valid = false;
        validation.err.push("Month cannot be higher than 12");
        validation.canContinue = false;
        return validation
    }
    return validation
}

export function validateDay(day: string, month?: number, year?: number): InputDateAutoDateValidation {
    const validation: InputDateAutoDateValidation = {
      err: [],
      valid: true,
      canContinue: true
    }
    const dayNum = parseInt(day);
    if (isNaN(dayNum)) {
      validation.valid = false;
      validation.err.push("Day is not number or empty");
      return validation
    }
    const lastDayOfMonthErr = isValidDate(year,month,dayNum);
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const maximumStartingDigit = parseInt(lastDayOfMonth.toString()[0]);
    if (dayNum && month && year) {
      if (lastDayOfMonthErr) {        
        validation.valid = false;
        validation.canContinue = false;
        validation.err.push(`Maximum day for ${year}/${month} is ${lastDayOfMonth}`);
        return validation
      }
    }

    if (day.length === 2 && day[0] === '0') {
      validation.valid = true;
      validation.canContinue = false;
      return validation
    }
    if (dayNum < 0) {
      validation.valid = false;
      validation.err.push("Day must be between 1 and 31");
      return validation
    }
    if (dayNum === 0) {
        validation.valid = false;
        validation.canContinue = true;
    }
    if (dayNum < 10 && dayNum >= maximumStartingDigit && dayNum <= lastDayOfMonth) {
      validation.valid = true;
      validation.canContinue = false;
      return validation
    }
    if (dayNum >= 10 && dayNum <= lastDayOfMonth) {
        validation.valid = true;
        validation.canContinue = false;
    }
    if (dayNum > 31) {
        validation.valid = false;
        validation.err.push("Day cannot be higher than 31");
        validation.canContinue = false;
        return validation
    }
    return validation
}

export function isValidDate(year: number, month: number, day: number): null | number {
  if (year < 1900 || year > 2099) {
    return null;
  }

  if (month < 1 || month > 12) {
    return null;
  }

  if (day < 1) {
    return null;
  }

  // Check if day is within the valid range for the given month
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  if (day > lastDayOfMonth) {
    return lastDayOfMonth;
  }

  return null;
}

export function getType(v: string):InputDateAutoPeriods {
  if (v.toLowerCase().includes('y')) {
    return InputDateAutoPeriods.YEAR
  }
  if (v.toLowerCase().includes('m')) {
    return InputDateAutoPeriods.MONTH
  }
  if (v.toLowerCase().includes('d')) {
    return InputDateAutoPeriods.DAY
  }
  return InputDateAutoPeriods.YEAR
}

export function getWidth(v: InputDateAutoPeriods, symbols: number, placeholder = false): string {
  if (!placeholder) {
    return `${symbols}ch`;
  }
  switch (v) {
    case InputDateAutoPeriods.YEAR:
      return `${symbols *0.7}rem`
      break;
    case InputDateAutoPeriods.MONTH:
      return `2rem`
      break;
    case InputDateAutoPeriods.DAY:
      return `${symbols *0.8}rem`
      break;
  }
}

export function compareDates(date1: Date, date2: Date): boolean {
  if (!date1 || !date2) {
    return false
  }
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  // Compare year, month, and day
  return year1 === year2 && month1 === month2 && day1 === day2;
}