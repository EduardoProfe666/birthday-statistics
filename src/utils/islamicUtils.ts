// @ts-ignore
import HijriDate from 'hijri-date';

const ISLAMIC_MONTHS = [
  'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
  'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
  'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'
];

export function getIslamicDate(date: Date): string {
  const hijri = new HijriDate();
  hijri.gregorianDate = date;
  const day = hijri.day;
  const month = ISLAMIC_MONTHS[hijri.month - 1]; // Months are 1-based in HijriDate
  const year = hijri.year;
  
  return `${day} ${month} ${year}`;
}