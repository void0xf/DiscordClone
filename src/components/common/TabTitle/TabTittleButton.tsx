import React from "react";
import { DisplayFriendsTabs } from "../../features/Friends/friends.t";

interface TabTittleButtonProps {
  label: string;
  onclickHandler: (selectedTab: DisplayFriendsTabs) => void;
  selectedTab?: string;
}

const TabTittleButton: React.FC<TabTittleButtonProps> = ({
  label,
  onclickHandler,
  selectedTab,
}) => {
  const hanleOnClick = () => {
    onclickHandler(label as DisplayFriendsTabs);
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
