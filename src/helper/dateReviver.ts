import { parseISO } from 'date-fns';

export function dateReviver(_key: string, value: unknown) {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return parseISO(value);
  }
  return value;
}
