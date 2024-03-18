import { useState } from "react";
import UserInputForm from "../../../components/common/AuthPage/UserInputForm";
import FormButton from "../../../components/common/AuthPage/FormButton";
import Link from "../../../components/common/AuthPage/Link";
import { createNewUser } from "../../../firebase/auth.js";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/user.t.js";
import Select from "../../../components/common/AuthPage/Select.tsx";
import DropDown from "../../../components/common/AuthPage/DropDown.tsx";


export const Register = () => {
  const nav = useNavigate();

  const [activeOptionDay, setActiveOptionDay] = useState("Dzień");
  const [activeOptionMonth, setActiveOptionMonth] = useState("Miesiąc");
  const [activeOptionYear, setActiveOptionYear] = useState("Rok");

  const [login, setActiveLogin] = useState<string | null>(null);
  const [nickname, setNickName] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const [isVisibleDay, setIsVisibleDay] = useState<boolean>(false);
  const [IsVisibleMonth, setIsVisibleMonth] = useState<boolean>(false);
  const [isVisibleYear, setIsVisibleYear] = useState<boolean>(false);

  const [months, setMonths] = useState<JSX.Element[]>();
  const [yearsElements, setYearsElements] = useState<JSX.Element[]>();
  const [daysElements, setDaysElements] = useState<JSX.Element[]>();

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

  const handleSetLogin = (text: string) => {
    setActiveLogin(text);
  };
  const handleSetNickname = (text: string) => {
    setNickName(text);
  };
  const handleSetName = (text: string) => {
    setName(text);
  };
  const hadnleSetPassword = (text: string) => {
    setPassword(text);
  };

  const handleRegister = async () => {
    if (login && nickname && name && password) {
      const UserData: User = {
        id: uuidv4(),
        nickName: nickname,
        profilePicture: "Default",
        name: name,
        servers: [],
        friends: [],
        birth: `${activeOptionDay}-${activeOptionMonth}-${activeOptionYear}`,
      };
      const res = await createNewUser(login, password, UserData);

      if (res) {
        nav("/channels/@me");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen divWithSVGBackgroundAuth">
      <div className='rounded-md flex h-[730px] w-[480px] font-"ggsans-Normal" bg-FromBackground'>
        <div className="flex-auto w-96 flex-col px-8">
          <h1 className="text-whiteMain text-2xl flex justify-center pt-7 pb-[10px] font-semibold">
            Załóż konto
          </h1>
{/* 
          <Select label='dzien'>
            <DropDown items={daysopstion}/>
          </Select> */}


          <UserInputForm
            label="Adres e-mail"
            onInputChange={handleSetLogin}
            hiddeInput={false}
            required={true}
          />
          <UserInputForm
            label="Wyświetlana nazwa"
            onInputChange={handleSetNickname}
            hiddeInput={false}
            required={true}
          />
          <UserInputForm
            label="Nazwa użytkownika"
            onInputChange={handleSetName}
            hiddeInput={false}
            required={true}
          />
          <UserInputForm
            label="Hasło"
            onInputChange={hadnleSetPassword}
            hiddeInput={true}
            required={true}
          />
          <div>
            <p className="text-darkWhite uppercase text-xs font-bold pt-[21px] pb-2 ">
              data urodzenia
            </p>
            <div className="flex flex-auto">


              {/* SELECT 1 */}
              <Select>
                  <DropDown options={daysElements} 
                value={(state) =>{
                  setActiveOptionDay(state)
                }}/>
              </Select>

              {/* SELECT 2 */}
              <div
                className="flex-auto w-[145px] flex  justify-center relative"
                onClick={() => {
                  setIsVisibleMonth(!IsVisibleMonth);
                }}
              >
                <div className={IsVisibleMonth ? "block" : "hidden"}>
                  <div
                    className="dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                scrollbar-thin scrollbar-webkit -webkit-scrollbar-track"
                  >
                    <div
                      className="overflow-hidden w-[125px] h-[480px] bg-zinc-700 "
                      onClick={(e) => {
                        if (e.target instanceof HTMLElement) {
                          setActiveOptionMonth(e.target.textContent as string);
                        }
                      }}
                    >
                      {months}
                    </div>
                  </div>
                </div>
                <div className=" outline-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ">
                  <div
                    className="h-[50px] overflow-hidden border-none flex p-1"
                    onClick={() => {
                      month();
                    }}
                  >
                    {activeOptionMonth}
                  </div>
                </div>
                <div className=" block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0">
                  <img
                    src="../src/assets/photos/arrow.png"
                    className=""
                    alt=""
                  />
                </div>
              </div>


              {/* SELECT 3 */}
              <div
                className="flex-auto w-[125px] flex justify-end relative "
                onClick={() => {
                  setIsVisibleYear(!isVisibleYear);
                }}
              >
                
                <div className={isVisibleYear ? "block" : "hidden"}>
                  <div
                    className="dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                scrollbar-thin scrollbar-webkit -webkit-scrollbar-track"
                  >
                    <div
                      className="overflow-hidden w-[125px] h-[6000px] bg-zinc-700 "
                      onClick={(e) => {
                        if (e.target instanceof HTMLElement) {
                          setActiveOptionYear(e.target.textContent as string);
                        }
                      }}
                    >
                      {yearsElements}
                    </div>
                  </div>
                </div>
                <div className="w-[95%] outline-none  h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ">
                  <div
                    className="h-[50px] overflow-hidden border-none flex p-1"
                    onClick={() => {
                      years();
                    }}
                  >
                    {activeOptionYear}
                  </div>
                </div>
                <div className=" block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0">
                  <img
                    src="../src/assets/photos/arrow.png"
                    className=""
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
              <div className="flex items-center mb-4">
    <input  type="checkbox" value="" className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled checkbox</label>
</div>
          <FormButton label="Kontynuuj" onClickHandler={handleRegister} />
          <div className="flex pt-2">
            <span className="text-darkWhite text-sm">Potrzebujesz konta?</span>
            <Link label="Masz już konto?" navigateTo="/login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
