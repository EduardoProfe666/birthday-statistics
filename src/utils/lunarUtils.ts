import { Lunar } from 'lunar-javascript';

export function getMoonPhase(date: Date): string {
  const lunar = Lunar.fromDate(date);
  const day = lunar.getDay();
  
  // Convert lunar day to moon phase
  if (day === 1) return 'New Moon';
  if (day < 8) return 'Waxing Crescent';
  if (day === 8) return 'First Quarter';
  if (day < 15) return 'Waxing Gibbous';
  if (day === 15) return 'Full Moon';
  if (day < 22) return 'Waning Gibbous';
  if (day === 22) return 'Last Quarter';
  return 'Waning Crescent';
}