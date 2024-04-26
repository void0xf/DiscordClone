import React from "react";
import { NavigationButtonProps } from "../../../types/Button.t";

// Correct destructuring to include `children` within props
const NavigationButtton: React.FC<NavigationButtonProps> = ({
  Icon,
  label,
  onClickHandler,
  isActive,
}) => {
  return (
    <button
      className={`${isActive ? "bg-HoverText text-white" : ""}
      flex gap-4  text-base hover:bg-HoverText p-2 w-full rounded-lg items-center py-[0.64rem] font-ggSansMedium`}
      onClick={() => onClickHandler()}
    >
      <div>{Icon}</div>
      <div>{label}</div>
    </button>
  );
};

export default NavigationButtton;
