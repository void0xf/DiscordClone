"use client";
import React from "react";
import { DisplayFriendsTabs } from "../../features/Friends/friends.t";

interface TabTittleFriendButtonProps {
  label: string;
  onclickHandler: (selectedTab: DisplayFriendsTabs) => void;
  selectedTab?: string;
}

const AddFriendButton: React.FC<TabTittleFriendButtonProps> = ({
  label,
  onclickHandler,
  selectedTab,
}) => {
  return (
    <button
      className={`${
        selectedTab == label
          ? "text-green-500 bg-transparent"
          : "bg-green-700 rounded-md text-white"
      } rounded-md px-2 font-ggSansMedium`}
      onClick={() => {
        onclickHandler(label as DisplayFriendsTabs);
      }}
    >
      {label}
    </button>
  );
};

export default AddFriendButton;
