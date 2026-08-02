import { useHabits } from '../context/useHabits';
import HabitItem from './HabitItem';

type HabitListProps = {
  visibleDates: Date[];
};

export default function HabitList({ visibleDates }: HabitListProps) {
  const { habits } = useHabits();
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        Пока ничего нет. Добавьте привыку, чтобы начать
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map(habit => (
        <HabitItem key={habit.id} habit={habit} visibleDates={visibleDates} />
      ))}
    </div>
  );
}
