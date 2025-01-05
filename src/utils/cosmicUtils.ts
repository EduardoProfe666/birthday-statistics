import { differenceInDays, differenceInYears } from 'date-fns';

interface CosmicMetrics {
  solarOrbits: number;
  earthRotations: number;
  distanceTraveled: number;
}

const EARTH_ORBITAL_SPEED = 107226; // km/h
const SOLAR_SYSTEM_SPEED = 828000; // km/h around galactic center

export function getCosmicMetrics(birthDate: Date, currentDate: Date): CosmicMetrics {
  const days = differenceInDays(currentDate, birthDate);
  const years = differenceInYears(currentDate, birthDate);
  const hours = days * 24;
  
  const earthOrbitalDistance = hours * EARTH_ORBITAL_SPEED;
  const solarSystemDistance = hours * SOLAR_SYSTEM_SPEED;
  const totalDistance = (earthOrbitalDistance + solarSystemDistance) / 1000000000;
  
  return {
    solarOrbits: years,
    earthRotations: days,
    distanceTraveled: totalDistance
  };
}