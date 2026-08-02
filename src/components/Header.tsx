import { format, isThisYear, isToday } from 'date-fns';
import { useHabits } from '../context/useHabits';
import Button from './Button';
import { ru } from 'date-fns/locale';

type HeaderProps = {
  visibleDates: Date[];
  onPrev: () => void;
  onNext: () => void;
};

export default function Header({ visibleDates, onPrev, onNext }: HeaderProps) {
  const { habits } = useHabits();

  const doneToday = habits.filter(h =>
    h.completions.some(c => isToday(c)),
  ).length;

  const dateRange = `${format(visibleDates[0], 'MMM d', { locale: ru })} - ${format(visibleDates.at(-1)!, 'MMM d', { locale: ru })}`;

  return (
    <header className="flex items-center gap-2 justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Трекер привычек
        </h1>
        <span className="text-zinc-400 text-sm">
          {doneToday} / {habits.length} завершено сегодня
        </span>
      </div>

      <div className="flex flex-col gap-1 items-end">
        <span className="text-zinc-400 text-sm">{dateRange}</span>
        <div className="flex items-center gap-3">
          <Button
            onClick={onPrev}
            disabled={visibleDates.some(d => !isThisYear(d))}
          >
            Пред
          </Button>
          <Button
            onClick={onNext}
            disabled={visibleDates.some(d => isToday(d))}
          >
            След
          </Button>
        </div>
      </div>
    </header>
  );
}
