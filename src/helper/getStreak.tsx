import { isSameDay, subDays } from 'date-fns';

export default function getStreak(completions: Date[]) {
  let streak = 0;
  let date = new Date();

  while (completions.some(c => isSameDay(c, date))) {
    streak++;
    date = subDays(date, 1);
  }

  return streak;
}
