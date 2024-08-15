import { generateDayNames } from "./functions/calendar-functions";

export interface IMonth {
  name: string;
  shortName: string;
  number: number;
}

export interface IDay {
  name: string;
  shortName: string;
}

export const monthList: IMonth[] = [
  { name: 'January', shortName: 'Jan',number: 1 },
  { name: 'February', shortName: 'Feb',number: 2 },
  { name: 'March', shortName: 'Mar',number: 3 },
  { name: 'April', shortName: 'Apr',number: 4 },
  { name: 'May', shortName: 'May',number: 5 },
  { name: 'June', shortName: 'Jun',number: 6 },
  { name: 'July', shortName: 'Jul',number: 7 },
  { name: 'August', shortName: 'Aug',number: 8 },
  { name: 'September', shortName: 'Sep',number: 9 },
  { name: 'October', shortName: 'Oct',number: 10 },
  { name: 'November', shortName: 'Nov',number: 11 },
  { name: 'December', shortName: 'Dec',number: 12 }
];

export interface IMonthChange {
  month: IMonth;
  year: number;
}

export const weekDay: IDay[] = generateDayNames();
