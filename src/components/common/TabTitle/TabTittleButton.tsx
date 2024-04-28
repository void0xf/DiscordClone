import React from "react";
import { DisplayFriendsTabs } from "../../features/Friends/friends.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import NotificationCounterDot from "../NotificationCounterDot";

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
  const user = useSelector((state: RootState) => state.user);

  return (
    <button
      className={`font-ggSansMedium flex items-center gap-2 ${
        selectedTab == label
          ? "bg-SelectedFriendTab rounded-md text-white"
          : "bg-transparent"
      }
      px-2 `}
      onClick={() => hanleOnClick()}
    >
      {label}
      {label === "Pending" && user.incomingFriendRequests.length > 0 ? (
        <NotificationCounterDot
          NotifcaiotnCount={user.incomingFriendRequests.length}
        />
      ) : null}
    </button>
  );
};

export default TabTittleButton;
