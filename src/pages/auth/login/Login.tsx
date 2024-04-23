import { useRef, useState } from "react";
import QRcode from "../../../components/presentational/QRcode";
import UserInputForm from "../../../components/common/AuthPage/UserInputForm";
import Link from "../../../components/common/AuthPage/Link";
import FormButton from "../../../components/common/AuthPage/FormButton";
import { loginUser } from "../../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUserStateFromFirestore } from "../../../firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/userSlice";
import { User } from "../../../types/user.t";
import DiscordPageLogo from "../../../assets/icons/DiscordPageLogo.svg";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSetEmail = (text: string) => {
    setEmail(text);
  };
  const handleSetPassword = (text: string) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (email && password) {
      const uid = await loginUser(email, password);
      if (uid) {
        const user: User | null = await getUserStateFromFirestore(uid);
        if (user) {
          dispatch(setUser(user));
        }
        nav("/channels/@me");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen divWithSVGBackgroundAuth">
      <div className='w-full h-full md:justify-between xs:rounded-md xs:flex xs:h-[420px] xs:w-full xs:max-w-[50rem] font-"ggsans-Normal" bg-FromBackground xs:mx-16'>
        <div className="flex-auto flex-col px-8">
          <div className="justify-center flex mt-4 xs:hidden">
            <img src={DiscordPageLogo} alt="DiscordLogo" className="h-8 " />
          </div>
          <div className="text-center text-nowrap ">
            <h1 className="text-whiteMain text-2xl flex justify-center pt-7 font-semibold">
              Witamy ponownie!
            </h1>
            <p className="text-darkWhite flex justify-center p-1">
              Cieszymy się,że znowu z nami jesteś!
            </p>
          </div>

          <UserInputForm
            label="ADRES E-MAIL LUB NUMER TELEFONU"
            onInputChange={handleSetEmail}
            required={true}
            hideInput={false}
            inputRef={loginInputRef}
          />
          <UserInputForm
            label="Hasło"
            onInputChange={handleSetPassword}
            required={true}
            hideInput={true}
            inputRef={passwordInputRef}
          />

          <a href="">
            <p className="text-veryLightBlue hover:underline text-sm pt-1">
              Nie pamiętasz hasła?
            </p>
          </a>
          <div className="h-16 flex w-full mt-4 ">
            <FormButton
              label="Zaloguj się"
              onClickHandler={handleLogin}
              activeBoolean={true}
            />
          </div>

          <div className="flex">
            <span className="text-TextGray text-sm">Potrzebujesz konta?</span>
            <Link label="Zarejestruj się" navigateTo="/register" />
          </div>
        </div>

        <div className="h-full max-w-[300px] items-center hidden md:visible md:flex ">
          <QRcode />
        </div>
      </div>
    </div>
  );
};

export default Login;
