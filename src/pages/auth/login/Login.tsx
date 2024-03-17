import { useState } from "react";
import QRcode from "../../../components/presentational/QRcode";
import UserInputForm from "../../../components/common/AuthPage/UserInputForm";
import Link from "../../../components/common/AuthPage/Link";
import FormButton from "../../../components/common/AuthPage/FormButton";
import { loginUser } from "../../../firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const nav = useNavigate();

  const handleSetEmail = (text: string) => {
    setEmail(text);
  };
  const handleSetPassword = (text: string) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (email && password) {
      const res = await loginUser(email, password);
      if (res) {
        nav("/channels/@me");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen divWithSVGBackgroundAuth">
      <div className='rounded-md flex h-[420px] w-[800px] font-"ggsans-Normal" bg-FromBackground'>
        <div className="flex-auto w-96 flex-col px-8">
          <h1 className="text-whiteMain text-2xl flex justify-center pt-7 font-semibold">
            Witamy ponownie!
          </h1>
          <p className="text-darkWhite flex justify-center p-1">
            Cieszymy się,że znowu z nami jesteś!
          </p>

          <UserInputForm
            label="ADRES E-MAIL LUB NUMER TELEFONU"
            onInputChange={handleSetEmail}
            required={true}
            hiddeInput={false}
          />
          <UserInputForm
            label="Hasło"
            onInputChange={handleSetPassword}
            required={true}
            hiddeInput={true}
          />

          <a href="">
            <p className="text-veryLightBlue hover:underline text-sm pt-1">
              Nie pamiętasz hasła?
            </p>
          </a>
          <FormButton label="Zaloguj się" onClickHandler={handleLogin} />

          <div className="flex pt-2">
            <span className="text-darkWhite text-sm">Potrzebujesz konta?</span>
            <Link label="Zarejestruj się" navigateTo="/register" />
          </div>
        </div>

        <div className="h-full w-[300px] flex items-center">
          <QRcode />
        </div>
      </div>
    </div>
  );
};

export default Login;
