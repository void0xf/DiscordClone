import React from "react";

interface TabTittleButtonProps {
  label: string;
  onclickHandler: (selectedTab: string) => void;
  selectedTab?: string;
}

const TabTittleButton: React.FC<TabTittleButtonProps> = ({
  label,
  onclickHandler,
  selectedTab,
}) => {
  const hanleOnClick = () => {
    onclickHandler(label);
  };

  return (
    <button
      className={`${selectedTab == label ? "bg-gray-200" : "bg-transparent"}
      px-4 `}
      onClick={() => hanleOnClick()}
    >
      {label}
    </button>
  );
};

export default TabTittleButton;
