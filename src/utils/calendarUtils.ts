import { format } from 'date-fns';
import { Lunar } from 'lunar-javascript';
import { HDate } from '@hebcal/core';
import { getIslamicDate } from './islamicUtils';

export function getGregorianDate(date: Date): string {
  return format(date, 'MMMM d, yyyy');
}

export function getChineseDate(date: Date): string {
  const lunar = Lunar.fromDate(date);
  return `${lunar.getYearInChinese()}年${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
}

export { getIslamicDate };

export function getHebrewDate(date: Date): string {
  const hDate = new HDate(date);
  return hDate.toString('h');
}