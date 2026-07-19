import HabitItem from './HabitItem';

export default function HabitList() {
  const habits = [{ id: 'dsf', name: 'Hi' }];

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one to get started
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map(habit => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
