import React from "react";

interface SidebarDotProps {
  isHover: boolean;
  isSelected: boolean;
  notification: boolean;
}

const SidebarDot: React.FC<SidebarDotProps> = ({
  isHover,
  isSelected,
  notification,
}) => {
  return (
    <div
      className={`w-[0.35rem] h-[1rem] rounded-2xl bg-whiteMain absolute top-1/2 -left-[0.6rem] -translate-y-1/2 scale-0 transition-transform duration-300
      ${isSelected ? " scale-y-[2.5] scale-100" : ""}
      ${isHover && !isSelected ? "scale-y-[1.5] scale-100  " : ""}
      ${notification && !isHover ? "scale-y-[1] scale-100" : ""}`}
    ></div>
  );
};

export default SidebarDot;
