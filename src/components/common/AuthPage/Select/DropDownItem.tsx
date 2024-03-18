import React from "react";

interface DropDownItemProps {
  children: string;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ children }) => {
  return (
    <div className="flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200">
      {children}
    </div>
  );
};

export default DropDownItem;
