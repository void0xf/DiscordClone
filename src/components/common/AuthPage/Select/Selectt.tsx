import { useState, ReactNode } from "react";
import DropDownn from "./DropDownn";

interface SelectProps {
  label: string;
  onSelectHandler: (selctedValue: string) => void;
  children: ReactNode[] | ReactNode;
}

const Selectt: React.FC<SelectProps> = (props) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const { label, onSelectHandler } = props;
  const { children } = props;
  const [selectedValue, setSelectedValue] = useState<string>();

  const onSelectHandlerSetDisplayValue = (selectedValue: string) => {
    setSelectedValue(selectedValue);
    onSelectHandler(selectedValue);
  };

  return (
    <div
      className="flex-auto w-[125px] flex justify-start relative "
      onClick={() => {
        setIsDropDownVisible(!isDropDownVisible);
      }}
    >
      <div className={isDropDownVisible ? "block" : "hidden"}>
        <DropDownn
          items={children}
          onSelectHandler={onSelectHandlerSetDisplayValue}
        />
      </div>

      <div className=" outline-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ">
        <div className="h-[50px] overflow-hidden border-none flex p-1">
          {selectedValue ? selectedValue : label}
        </div>
      </div>
      <div className="scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0">
        <img src="../src/assets/photos/arrow.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Selectt;
