"use client";

import React from "react";
import { NavigationButtonProps } from "../../../types/Button.t";
import NotificationCounterDot from "../../common/NotificationCounterDot";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

// Correct destructuring to include `children` within props
const NavigationButtton: React.FC<NavigationButtonProps> = ({
  Icon,
  label,
  onClickHandler,
  isActive,
}) => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <button
      className={`${isActive ? "bg-HoverText text-white" : ""}
      flex justify-between text-base hover:bg-HoverText p-2 w-full rounded-lg items-center py-[0.64rem] font-ggSansMedium`}
      onClick={() => onClickHandler()}
    >
      <div className="flex gap-4">
        <div>{Icon}</div>
        <div>{label}</div>
      </div>
      {label === "Friends" && user.incomingFriendRequests.length > 0 ? (
        <NotificationCounterDot
          NotifcaiotnCount={user.incomingFriendRequests.length}
        />
      ) : null}
    </button>
  );
};

export default NavigationButtton;
