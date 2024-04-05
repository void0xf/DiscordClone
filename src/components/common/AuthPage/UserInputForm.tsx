import React, { useState } from "react";

interface UserInputForm {
  label: string;
  onInputChange: (set: string) => void;
  required: boolean;
  hiddeInput: boolean;
<<<<<<< Updated upstream
  inputRef: React.RefObject<HTMLInputElement>;
}

const UserInputForm: React.FC<UserInputForm> = ({
  label,
  onInputChange,
  required,
  hiddeInput,
  inputRef,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div>
      <p className="text-darkWhite uppercase text-xs font-bold pt-3 pb-2 font-ggSansBold ">
        {label}
        {required ? <p className="text-red-400 inline-block ml-1">*</p> : ""}
      </p>
      <div>
        <input
          type={hiddeInput ? "password" : "text"}
          className="text-slate-200 w-full focus:outline-none caret caret-white bg-zinc-800 rounded-sm h-[40px] mb-2 p-2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleOnChange(e);
          }}
          ref={inputRef}
        />
      </div>
=======
  isInputClicked: (set:boolean) => void;
  text?:string;
}

const UserInputForm: React.FC<UserInputForm> = ({label, onInputChange, required, hiddeInput,isInputClicked,text}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    onInputChange(e.target.value)
  } 
  const [isClicked,setIsClicked] = useState(true)

  return (
    <div onClick={()=>{
      setIsClicked(!isClicked)
      isInputClicked(!isClicked)}}>
        {isClicked ? 
        <div className="">
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 font-ggSansBold '>
          {label}
          {required ? 
          <p className="text-red-400 inline-block ml-1">*</p> : ''}
        </p>
        <div>
          <input 
          type={hiddeInput ? "password" : "text"} 
          className='text-slate-200 w-full focus:outline-none caret caret-white bg-inputColor rounded-sm h-[40px] mb-2 p-2' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleOnChange(e)}}
          />
        </div>

        </div>
        :
        <div>
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 font-ggSansBold '>
          {label}
          {required ? 
          <p className="text-red-400 inline-block ml-1">*</p> : ''}
        </p>
        <div>
          <input 
          type={hiddeInput ? "password" : "text"} 
          className='text-slate-200 w-full focus:outline-none caret caret-white bg-inputColor rounded-sm h-[40px] mb-2' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleOnChange(e)}}
          />
        </div>
            <span className="text-gray-300 text-[14px] ">{text}</span>
        </div>
          }
>>>>>>> Stashed changes
    </div>
  );
};

export default UserInputForm;
