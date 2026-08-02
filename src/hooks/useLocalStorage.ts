import { useEffect, useState } from 'react';
import { dateReviver } from '../helper/dateReviver';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return initialValue;
      return JSON.parse(item, dateReviver);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue] as const;
}
