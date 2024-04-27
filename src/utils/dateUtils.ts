export function isValidDate(day: number, month: number, year: number) {
  const date = new Date(year, month, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}

export function isOlderThanOneMinute(timestamp: number) {
  // Convert timestamp to milliseconds
  const timestampMilliseconds = timestamp;

  // Get current time in milliseconds
  const currentTimeMilliseconds = new Date().getTime();

  // Calculate difference in milliseconds
  const differenceMilliseconds =
    currentTimeMilliseconds - timestampMilliseconds;

  // Check if difference is greater than one minute (60,000 milliseconds)
  return differenceMilliseconds > 60000;
}

export function isOlderThanOneDay(date1: number, date2: number): boolean {
  const dateFromTimestamp = new Date(date1);
  const dateFromTimestamp2 = new Date(date2);

  const difference = dateFromTimestamp2.getTime() - dateFromTimestamp.getTime();

  const days = difference / (1000 * 60 * 60 * 24);
  if (days < 0) {
    return days * -1 > 1;
  }

  return days > 1;
}
