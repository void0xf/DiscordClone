export function isValidDate(day: number, month: number, year: number) {
  const date = new Date(year, month, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}
