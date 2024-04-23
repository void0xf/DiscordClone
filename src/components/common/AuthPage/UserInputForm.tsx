import React, { useState } from "react";

interface UserInputFormProps {
  label: string;
  onInputChange: (value: string) => void;
  required: boolean;
  hideInput: boolean;
  text?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  errorCode: string;
}
function errorCodeToMessage(errorCode: string) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Dane logowanie lub hasło są nieprawidłowe";
    case "auth/email-already-in-use":
      return "Adres e-mail jest już zarejestrowany";
    case "auth/name-in-use":
      return "Ta nazwa użytkownika jest niedostępna.";
    case "required":
      return "Wymagane";
  }
}

const UserInputForm: React.FC<UserInputFormProps> = ({
  label,
  onInputChange,
  required,
  hideInput,
  text,
  inputRef,
  errorCode,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="relative">
      <div
        className={`${
          errorCode === "" ? "text-darkWhite" : "text-red-400"
        }  uppercase text-xs font-bold pt-3 pb-2 font-ggSansBold flex text-nowrap`}
      >
        <p className="text-wrap">
          {label}
          {errorCode !== "" ? (
            <ins className="no-underline font-ggSansMediumItalic text-[0.65rem]">
              {" "}
              - {errorCodeToMessage(errorCode)}
            </ins>
          ) : (
            ""
          )}
        </p>

        {required && errorCode === "" && (
          <span className="text-red-400 ml-1">*</span>
        )}
      </div>
      <input
        type={hideInput ? "password" : "text"}
        className="text-slate-200 w-full focus:outline-none caret-white bg-inputColor rounded-sm h-[40px] mb-2 p-2"
        onChange={handleOnChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        required={required}
      />
      <div
        className={`transition-opacity duration-400 ease-out ${
          isFocused ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        <span className="text-gray-300 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default UserInputForm;
