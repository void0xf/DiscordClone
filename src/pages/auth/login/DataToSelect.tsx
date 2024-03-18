import { useState } from 'react';

export const useMonthsAndYears = () => {
  const [Months] = useState<string[]>([
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ]);

  const optionsToYear: JSX.Element[] = [];
  const optionsToMonths: JSX.Element[] = [];

  const month = () => {
    Months.forEach((month) => {
      optionsToMonths.push(
        <div
          className="flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200"
          key={month}
        >
          {month}
        </div>
      );
    });
    return optionsToMonths;
  };

  const years = () => {
    for (let year = 1872; year <= 2021; year++) {
      optionsToYear.push(
        <div
          className="flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200"
          key={year}
        >
          {year}
        </div>
      );
    }
    return optionsToYear;
  };

  return { months: month(), years: years() };
};