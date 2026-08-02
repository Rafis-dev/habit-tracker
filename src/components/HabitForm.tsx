import { useState, type SubmitEvent } from 'react';
import Button from './Button';
import { useHabits } from '../context/useHabits';

export default function HabitForm() {
  const [name, setName] = useState('');
  const { addHabit } = useHabits();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (name.trim() === '') return;
    addHabit(name);
    setName('');
  }
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        className="flex-1 rounded-lg bg-zinc-800 px-2 sm:px-4
      py-2
      outline-none focus-visible:ring-2
      focus-visible:ring-violet-500"
        placeholder="Новая привычка..."
      />
      <Button
        disabled={name.trim() === ''}
        className="rounded-lg px-2 py-1 text-sm sm:text-base sm:px-4 sm:py-2 font-medium"
      >
        Добавить привычку
      </Button>
    </form>
  );
}
