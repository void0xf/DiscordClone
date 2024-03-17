import React from "react";

interface UserInputForm {
  label: string;
  onInputChange: (set: string) => void;
  required: boolean;
  hiddeInput: boolean
}

const UserInputForm: React.FC<UserInputForm> = ({label, onInputChange, required, hiddeInput}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    onInputChange(e.target.value)
  }

  return (
    <div>
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 font-ggSansBold '>
          {label}
          {required ? 
          <p className="text-red-400 inline-block ml-1">*</p> : ''}
        </p>
        <div>
          <input 
          type={hiddeInput ? "password" : "text"} 
          className='text-slate-200 w-full focus:outline-none caret caret-white bg-zinc-800 rounded-sm h-[40px] mb-2 p-2' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleOnChange(e)}}
          />
        </div>
    </div>
  )
}

export default UserInputForm
