"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import DiscordPageLogo from "@/assets/icons/DiscordPageLogo.svg";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/FirebaseConfig";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getUserStateFromFirestore } from "@/firebase/firestore";
import { User } from "@/types/user.t";
import UserInputForm from "@/components/common/AuthPage/UserInputForm";
import QRcode from "@/components/presentational/QRcode";
import FormButton from "@/components/common/AuthPage/FormButton";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/slices/userSlice";
import { setAuthCookies } from "@/firebase/authCookies";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [errorCode, setErrorCode] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || "/channels/@me";

  const handleSetEmail = (text: string) => {
    setEmail(text);
  };
  const handleSetPassword = (text: string) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (email && password) {
      setIsLoading(true);
      try {
        const firebaseApp = initializeApp(firebaseConfig);
        const auth = getAuth(firebaseApp);
        
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        
        await setAuthCookies(userCredential.user);
        
        setErrorCode("");
        if (uid) {
          const user: User | null = await getUserStateFromFirestore(uid);
          if (user) {
            dispatch(setUser(user));
            router.push(redirectPath);
          }
        }
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          setErrorCode(error.code);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen divWithSVGBackgroundAuth">
      <div className='w-full h-full md:justify-between xs:rounded-md xs:flex xs:h-[420px] xs:w-full xs:max-w-[50rem] font-"ggsans-Normal" bg-FromBackground xs:mx-16'>
        <div className="flex-auto flex-col px-8">
          <div className="justify-center flex mt-4 xs:hidden">
            <Image src={DiscordPageLogo} alt="DiscordLogo" className="h-6" />
          </div>
          <div className="text-center text-nowrap ">
            <h1 className="text-whiteMain text-2xl flex justify-center pt-7 font-semibold">
              Witamy ponownie!
            </h1>
            <p className="text-darkWhite flex justify-center p-1">
              Cieszymy się,że znowu z nami jesteś!
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <UserInputForm
              label="ADRES E-MAIL LUB NUMER TELEFONU"
              onInputChange={handleSetEmail}
              required={true}
              hideInput={false}
              inputRef={loginInputRef}
              errorCode={errorCode}
            />
            <UserInputForm
              label="Hasło"
              onInputChange={handleSetPassword}
              required={true}
              hideInput={true}
              inputRef={passwordInputRef}
              errorCode={errorCode}
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
                isLoading={isLoading}
              />
            </div>
          </form>

          <div className="flex">
            <span className="text-TextGray text-sm">Potrzebujesz konta?</span>
            <p className="text-[#00A8FC] text-sm ml-1">
              <Link href={"/register"}>Zarejestruj się</Link>
            </p>
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
