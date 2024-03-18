import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';

interface SelectProps {
  options: JSX.Element[] | undefined;
}


const Select = () => {
  const [isVisibleDay, setIsVisibleDay] = useState<boolean>(false);
  const [IsVisibleMonth, setIsVisibleMonth] = useState<boolean>(false);
  const [isVisibleYear, setIsVisibleYear] = useState<boolean>(false);

  const [activeOptionDay, setActiveOptionDay] = useState("Dzień");
  const [activeOptionMonth, setActiveOptionMonth] = useState("Miesiąc");
  const [activeOptionYear, setActiveOptionYear] = useState("Rok");
  

  const [isDropdownActive, setIsDropdownActive] = useState(false);


  const [months, setMonths] = useState<JSX.Element[]>();
  const [yearsElements, setYearsElements] = useState<JSX.Element[]>();
  const [daysElements, setDaysElements] = useState<JSX.Element[] | undefined>();

  
  const [selectedOption, setSelectedOption] = useState<string>("");


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
  const optionsToDays: JSX.Element[] = [];
  const optionsToMonths: JSX.Element[] = [];

  const days = () => {
    for (let day = 1; day <= 31; day++) {
      optionsToDays.push(
        <div
          className="flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200"
          key={day}
        >
          {day}
        </div>
      );
    }
    setDaysElements(optionsToDays);
  };
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
    <div className="flex-auto w-[125px] flex justify-start relative "
            onClick={() => {
              setIsVisibleDay(!isVisibleDay);
              days();
            }}
            >
              <div className={isVisibleDay ? "block" : "hidden"}
              >
              <DropDown 
              options={daysElements} 
              onClickHandler={(selectedValue) =>{
                setActiveOptionDay(selectedValue)
              }}/>
              </div>
              
              <div className=" outline-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ">
            <div
            className="h-[50px] overflow-hidden border-none flex p-1"
            >
            {activeOptionDay}
            </div>
            </div>
            <div className="block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0">
            <img
            src="../src/assets/photos/arrow.png"
            className=""
            alt=""
            />
            </div>
            </div>
  )
}

export default Select
