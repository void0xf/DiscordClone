import React, { ReactNode } from "react";

interface TabTittleBarProps {
  children: ReactNode;
}

const TabTittleBar: React.FC<TabTittleBarProps> = ({ children }) => {
  return (
    <div className="bg-LightGray w-full flex align-baseline shadow-elevation-low border-b-[2px] border-notQuiteBlack h-12 ">
      {children}
    </div>
  );
};

export default TabTittleBar;
