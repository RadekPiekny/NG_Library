import { IDay } from "../ngx-calendar.model";

export function generateCurrentMonthDays(thisMonthDate?: Date): Date[] {
  let year: number;
  let month: number;
  if (thisMonthDate) {
    year = thisMonthDate.getFullYear();
    month = thisMonthDate.getMonth();
  } else {
    thisMonthDate = new Date();
    year = thisMonthDate.getFullYear();
    month = thisMonthDate.getMonth();
  }

  const startDate = new Date(year, month, 1, 12);
  const endDate = new Date(year, month + 1, 1, 12);
  endDate.setMilliseconds(-1);
  return generateDays(startDate, endDate);
}

export function generatePreviousMonthDays(thisMonthDate?: Date): Date[] {
  if (!thisMonthDate) {
    thisMonthDate = new Date();
  }
  const firstDayInMonth: number = thisMonthDate.getDay();
  if (firstDayInMonth === 1) {
    // starts with monday
    return [];
  }
  const endDate = new Date(thisMonthDate);
  endDate.setDate(thisMonthDate.getDate() - 1);
  const daysCount: number = firstDayInMonth === 0 ? 5 : firstDayInMonth - 2; // I randomly tried some numbers and it works. No touch! Peak development.
  const startDate = new Date(
    endDate.getTime() - 24 * daysCount * 60 * 60 * 1000
  );
  return generateDays(startDate, endDate);
}

export function generateNextMonthDays(thisMonthDate?: Date) {
  let currentMonth: number;;
  if (!thisMonthDate) {
    const currentYear: number = new Date().getFullYear();
    currentMonth = new Date().getMonth() + 1;
    thisMonthDate = new Date(currentYear, currentMonth - 1, 1);
  } else {
    currentMonth = thisMonthDate.getMonth() + 1
  }
  const lastDayInMonth: number = new Date(thisMonthDate.getFullYear(), currentMonth, 0).getDay();
  if (lastDayInMonth === 7) {
    // ends with sunday
    return [];
  }
  const startDate = firstDayOfNextMonth(thisMonthDate);
  const endDate = new Date(thisMonthDate.getFullYear(), startDate.getMonth(), 7 - lastDayInMonth);

  return generateDays(startDate, endDate);
}

export function generateGeneralMonthDays(): Date[] {
  const currentMonthDays = generateCurrentMonthDays();
  const previousMonthDays = generatePreviousMonthDays();
  const nextMonthDays = generateNextMonthDays();
  return [...previousMonthDays,...currentMonthDays,...nextMonthDays]
}

export function generateDays(startDate: Date, endDate: Date): Date[] {
  const result: Date[] = [];
  let loop = new Date(startDate);
  while (loop <= endDate) {
    result.push(loop);
    const newDate = new Date(loop);
    newDate.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }
  return result;
}

export const generateDayNames = (language = 'en-us') => {
  const result: IDay[] = [];
  const currentDate: Date = new Date();

  const currentMonday: Date = currentDate;
  let currentIndex: number = currentDate.getDay();
  while (currentIndex !== 1) {
    currentMonday.setDate(currentMonday.getDate() + 1);
    currentIndex = currentDate.getDay();
  }
  for (let index = 0; index < 7; index++) {
    const thisDate = new Date(
      currentMonday.getTime() + (24 * index + 1) * 60 * 60 * 1000
    );
    const name = thisDate.toLocaleDateString(language, { weekday: 'long' });
    const shortName = thisDate.toLocaleDateString(language, {
      weekday: 'short'
    });
    result.push({ name, shortName });
  }
  return result;
};

function firstDayOfNextMonth(date: Date = new Date()): Date {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // add 1 because getMonth() returns 0-indexed months
  const nextMonth = (month === 12) ? 1 : month + 1; // if it's December, set next month to January
  const firstDayOfNextMonth = new Date(year, nextMonth - 1, 1); // subtract 1 from nextMonth because months are 0-indexed
  return firstDayOfNextMonth;
}

export function getNextDay(date: Date,daysDiff: number): Date {
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + daysDiff);
  return nextDay;
}

export function isDateHigherOrEqual(date1: Date, date2: Date): boolean {
  if (!date1 || !date2) {
    return false;
  }
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return (
      year1 > year2 ||
      (year1 === year2 && month1 > month2) ||
      (year1 === year2 && month1 === month2 && day1 >= day2)
  );
}

export function isDateLowerOrEqual(date1: Date, date2: Date): boolean {
  if (!date1 || !date2) {
    return false;
  }
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return (
      year1 < year2 ||
      (year1 === year2 && month1 < month2) ||
      (year1 === year2 && month1 === month2 && day1 <= day2)
  );
}

export function isDateInArray(targetDate: Date, dateArray: Date[]): boolean {
  const targetYear = targetDate.getFullYear();
  const targetMonth = targetDate.getMonth();
  const targetDay = targetDate.getDate();

  for (const date of dateArray) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      if (year === targetYear && month === targetMonth && day === targetDay) {
          return true;
      }
  }

  return false;
}