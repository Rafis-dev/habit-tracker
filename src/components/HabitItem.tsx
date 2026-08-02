import { format, isFuture, isSameDay } from 'date-fns';
import Button from './Button';
import { ru } from 'date-fns/locale';
import getStreak from '../helper/getStreak';
import { useHabits, type Habit } from '../context/useHabits';

type HabitItemProps = {
  habit: Habit;
  visibleDates: Date[];
};

export default function HabitItem({ habit, visibleDates }: HabitItemProps) {
  const { deleteHabit, toggleHabit } = useHabits();

  const streak = getStreak(habit.completions);

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex item-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          {streak !== 0 && (
            <span className="text-sm text-amber-400">🔥 {streak}</span>
          )}
        </div>
        <Button
          onClick={() => deleteHabit(habit.id)}
          variant="ghost-destructive"
          className="text-xs"
        >
          Удалить
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map(date => (
          <Button
            className="flex flex-1 flex-col items-center gap-0.6 rounded-lg text-sm"
            key={date.toISOString()}
            disabled={isFuture(date)}
            onClick={() => toggleHabit(habit.id, date)}
            variant={
              habit.completions.some(d => isSameDay(date, d))
                ? 'primary'
                : 'secondary'
            }
          >
            <span className="font-medium">
              {format(date, 'EEE', { locale: ru })}
            </span>
            <span>{format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
