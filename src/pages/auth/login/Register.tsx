import { useRef, useState } from "react";
import UserInputForm from "../../../components/common/AuthPage/UserInputForm";
import FormButton from "../../../components/common/AuthPage/FormButton";
import Link from "../../../components/common/AuthPage/Link";
import { createNewUser } from "../../../firebase/auth.js";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { User, UserStatus } from "../../../types/user.t.js";
import Selectt from "../../../components/common/AuthPage/Select/Selectt.tsx";
import DropDownItem from "../../../components/common/AuthPage/Select/DropDownItem.tsx";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/userSlice.ts";

export const Register = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [activeOptionDay, setActiveOptionDay] = useState<string>();
  const [activeOptionMonth, setActiveOptionMonth] = useState<string>();
  const [activeOptionYear, setactiveOptionYear] = useState<string>();
  const emailRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [days] = useState<string[]>(
    [...Array(31).keys()].map((x) => (x + 1).toString())
  );
  const [years] = useState(() =>
    Array.from({ length: 2024 - 1900 + 1 }, (_, index) =>
      (1900 + index).toString()
    )
  );
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

  const handleSetLogin = (text: string) => {
    return text;
  };
  const handleSetNickname = (text: string) => {
    return text;
  };
  const handleSetName = (text: string) => {
    return text;
  };
  const hadnleSetPassword = (text: string) => {
    return text;
  };

  const handleRegister = async () => {
    console.log(
      emailRef.current?.value,
      nickNameRef.current?.value,
      nameRef.current?.value,
      passwordRef.current?.value
    );

    if (
      emailRef.current?.value &&
      nickNameRef.current?.value &&
      nameRef.current?.value &&
      passwordRef.current?.value
    ) {
      const UserData: User = {
        id: uuidv4(),
        nickName: nickNameRef.current?.value,
        profilePicture:
          "https://qph.cf2.quoracdn.net/main-qimg-79328e1b72fb21811c72f9e1dbebed14",
        name: nameRef.current?.value,
        servers: [],
        friends: [],
        incomingFriendRequests: [],
        outgoingFriendRequests: [],
        DirectMessages: [],
        status: UserStatus.online,
        birth: `${activeOptionDay}-${activeOptionMonth}-${activeOptionYear}`,
      };
      const res = await createNewUser(
        emailRef.current?.value,
        passwordRef.current?.value,
        UserData
      );
      dispatch(setUser(UserData));
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

          <UserInputForm
            label="Adres e-mail"
            onInputChange={handleSetLogin}
            hiddeInput={false}
            required={true}
            inputRef={emailRef}
          />
          <UserInputForm
            label="Wyświetlana nazwa"
            onInputChange={handleSetNickname}
            hiddeInput={false}
            required={true}
            inputRef={nickNameRef}
          />
          <UserInputForm
            label="Nazwa użytkownika"
            onInputChange={handleSetName}
            hiddeInput={false}
            required={true}
            inputRef={nameRef}
          />
          <UserInputForm
            label="Hasło"
            onInputChange={hadnleSetPassword}
            hiddeInput={true}
            required={true}
            inputRef={passwordRef}
          />
          <div>
            <p className="text-darkWhite uppercase text-xs font-bold pt-[21px] pb-2 ">
              data urodzenia
            </p>
            <div className="flex flex-auto">
              <Selectt
                label="Dzień"
                onSelectHandler={(selectedOption: string) => {
                  setActiveOptionDay(selectedOption);
                }}
              >
                {days.map((number) => (
                  <DropDownItem>{number}</DropDownItem>
                ))}
              </Selectt>

              <Selectt
                label="Miesiąc"
                onSelectHandler={(selectedOption: string) => {
                  console.log(setActiveOptionMonth(selectedOption));
                }}
              >
                {Months.map((month) => (
                  <DropDownItem>{month}</DropDownItem>
                ))}
              </Selectt>

              <Selectt
                label="Rok"
                onSelectHandler={(selectedOption: string) => {
                  setactiveOptionYear(selectedOption);
                }}
              >
                {years.map((number) => (
                  <DropDownItem>{number}</DropDownItem>
                ))}
              </Selectt>
            </div>
          </div>
          <div className="flex items-center"></div>
          <div className="h-16 flex">
            <FormButton label="Kontynuuj" onClickHandler={handleRegister} />
          </div>
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
