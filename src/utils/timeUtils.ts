import { differenceInYears, differenceInMonths, differenceInWeeks, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface TimeMetrics {
  centuries: number;
  decades: number;
  quinquenniums: number;
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function getTimeMetrics(birthDate: Date, currentDate: Date = new Date()): TimeMetrics {
  const years = differenceInYears(currentDate, birthDate);
  
  return {
    centuries: Math.floor(years / 100),
    decades: Math.floor(years / 10),
    quinquenniums: Math.floor(years / 5),
    years,
    months: differenceInMonths(currentDate, birthDate),
    weeks: differenceInWeeks(currentDate, birthDate),
    days: differenceInDays(currentDate, birthDate),
    hours: differenceInHours(currentDate, birthDate),
    minutes: differenceInMinutes(currentDate, birthDate),
    seconds: differenceInSeconds(currentDate, birthDate)
  };
}