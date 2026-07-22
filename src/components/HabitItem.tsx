import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  startOfWeek,
} from 'date-fns';
import Button from './Button';
import { ru } from 'date-fns/locale';
import { type Habit } from './HabitList';

type HabitItemProps = {
  habit: Habit;
};

export default function HabitItem({ habit }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex item-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-amber-400">🔥 3</span>
        </div>
        <Button variant="ghost-destructive" className="text-xs">
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map(date => (
          <Button
            className="flex flex-1 flex-col items-center gap-0.6 rounded-lg text-sm"
            key={date.toISOString()}
            disabled={isFuture(date)}
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
