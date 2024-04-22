import React from "react";
import { NavigationButtonProps } from "../../../types/Button.t";

// Correct destructuring to include `children` within props
const NavigationButtton: React.FC<NavigationButtonProps> = ({
  Icon,
  label,
  onClickHandler,
}) => {
  return (
    <button
      className="flex  gap-4 font-ggsansNormal  text-base hover:bg-HoverText p-2 w-full rounded-lg items-center py-[0.64rem]"
      onClick={() => onClickHandler()}
    >
      <div>{Icon}</div>
      <div>{label}</div>
    </button>
  );
};

export default NavigationButtton;
