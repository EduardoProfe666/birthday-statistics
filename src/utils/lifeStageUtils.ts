export function getLifeStage(age: number): string {
  if (age < 1) return 'Newborn';
  if (age < 3) return 'Infant';
  if (age < 12) return 'Child';
  if (age < 18) return 'Teenager';
  if (age < 25) return 'Young Adult';
  if (age < 45) return 'Adult';
  if (age < 65) return 'Senior';
  if (age < 80) return 'Elderly';
  if (age < 100) return 'Elder';
  return 'Centenarian';
}