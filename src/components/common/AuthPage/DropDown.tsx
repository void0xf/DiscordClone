import React, { useState, useEffect } from 'react';
import Select from './Select';

interface DropDownProps {
    options: JSX.Element[] | undefined;
    onClickHandler: (option: string) => void;
  }


const DropDown:React.FC<DropDownProps> = ({options,onClickHandler}) => {

    // const stateOption = ['isVisibleDay','isVisibleMonth','isVisibleYear']
    
    const [activeOptionDay, setActiveOptionDay] = useState("Dzień");
    const [activeOptionMonth, setActiveOptionMonth] = useState("Miesiąc");
    const [activeOptionYear, setActiveOptionYear] = useState("Rok");

    const [months, setMonths] = useState<JSX.Element[]>();
    const [yearsElements, setYearsElements] = useState<JSX.Element[]>();

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
      interface DropDownProps {
        options: JSX.Element[] | undefined;
      }

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
        setMonths(optionsToMonths);
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
        setYearsElements(optionsToYear);
      };

  return (
    <div>
      <div
        className="dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                          scrollbar-thin scrollbar-webkit -webkit-scrollbar-track"
        >
        <div
        className="box overflow-hidden w-[125px] h-[1240px] bg-zinc-700 "
        onClick={(e) => {
            if (e.target instanceof HTMLElement) {
                onClickHandler(e.target.textContent as string)
            }
        }}
        >
        {options}
        </div>
      </div>
    </div>
  )
}

export default DropDown
