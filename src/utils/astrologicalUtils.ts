import { Lunar } from 'lunar-javascript';

const ZODIAC_SIGNS = [
  { name: 'Capricorn', start: [12, 22], end: [1, 19], element: 'Earth' },
  { name: 'Aquarius', start: [1, 20], end: [2, 18], element: 'Air' },
  { name: 'Pisces', start: [2, 19], end: [3, 20], element: 'Water' },
  { name: 'Aries', start: [3, 21], end: [4, 19], element: 'Fire' },
  { name: 'Taurus', start: [4, 20], end: [5, 20], element: 'Earth' },
  { name: 'Gemini', start: [5, 21], end: [6, 20], element: 'Air' },
  { name: 'Cancer', start: [6, 21], end: [7, 22], element: 'Water' },
  { name: 'Leo', start: [7, 23], end: [8, 22], element: 'Fire' },
  { name: 'Virgo', start: [8, 23], end: [9, 22], element: 'Earth' },
  { name: 'Libra', start: [9, 23], end: [10, 22], element: 'Air' },
  { name: 'Scorpio', start: [10, 23], end: [11, 21], element: 'Water' },
  { name: 'Sagittarius', start: [11, 22], end: [12, 21], element: 'Fire' }
];

const CHINESE_ZODIAC_TRANSLATIONS = {
  '鼠': 'Rat',
  '牛': 'Ox',
  '虎': 'Tiger',
  '兔': 'Rabbit',
  '龙': 'Dragon',
  '蛇': 'Snake',
  '马': 'Horse',
  '羊': 'Goat',
  '猴': 'Monkey',
  '鸡': 'Rooster',
  '狗': 'Dog',
  '猪': 'Pig'
};

export function getWesternZodiac(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  for (const sign of ZODIAC_SIGNS) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;

    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth === 12 && (
        (month === 12 && day >= startDay) ||
        (month === 1 && day <= endDay)
      ))
    ) {
      return sign.name;
    }
  }

  return ZODIAC_SIGNS[0].name;
}

export function getChineseZodiac(date: Date): string {
  const lunar = Lunar.fromDate(date);
  const chineseSign = lunar.getYearShengXiao();
  const englishTranslation = CHINESE_ZODIAC_TRANSLATIONS[chineseSign] || '';
  return `${chineseSign} (${englishTranslation})`;
}

export function getZodiacElement(zodiacSign: string): string {
  return ZODIAC_SIGNS.find(sign => sign.name === zodiacSign)?.element || 'Unknown';
}