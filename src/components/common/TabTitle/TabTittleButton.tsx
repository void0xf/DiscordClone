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
      className={`font-ggSansMedium ${
        selectedTab == label
          ? "bg-SelectedFriendTab rounded-md text-white"
          : "bg-transparent"
      }
      px-2 `}
      onClick={() => hanleOnClick()}
    >
      {label}
    </button>
  );
};

export default TabTittleButton;
