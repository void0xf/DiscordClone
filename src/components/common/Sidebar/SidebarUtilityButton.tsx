import React, { useState } from "react";
import SidebarTooltip from "./SidebarTooltip";
import { SidebarUltityButtonProps } from "../../../types/sidebar.t";

const SidebarUtilityButton: React.FC<SidebarUltityButtonProps> = ({
  label,
  Icon,
  onClick,
  iconSize = 24,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <button
        onClick={onClick}
        className="focus:outline-none w-12 h-12 rounded-full flex justify-center items-center mx-auto my-1 bg-notQuiteBlack hover:bg-SidebarUltityIcon hover:rounded-xl transition duration-200 ease-linear
      text-SidebarUltityIcon hover:text-white
      "
      >
        <Icon size={iconSize} className="" />
      </button>
      {isHovered && <SidebarTooltip label={label} />}
    </div>
  );
};

export default SidebarUtilityButton;
