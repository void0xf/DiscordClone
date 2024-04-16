import React, { useState } from "react";

interface UserInputFormProps {
  label: string;
  onInputChange: (value: string) => void;
  required: boolean;
  hideInput: boolean;
  text?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const UserInputForm: React.FC<UserInputFormProps> = ({
  label,
  onInputChange,
  required,
  hideInput,
  text,
  inputRef,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="relative">
      <p className="text-darkWhite uppercase text-xs font-bold pt-3 pb-2 font-ggSansBold">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </p>
      <input
        type={hideInput ? "password" : "text"}
        className="text-slate-200 w-full focus:outline-none caret-white bg-inputColor rounded-sm h-[40px] mb-2 p-2"
        onChange={handleOnChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
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
