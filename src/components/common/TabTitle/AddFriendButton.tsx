import React from "react";

interface TabTittleFriendButtonProps {
  label: string;
  onclickHandler: (selectedTab: string) => void;
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
          ? "text-green-600 bg-transparent"
          : "bg-green-600 rounded-md"
      }`}
      onClick={() => {
        onclickHandler(label);
      }}
    >
      {label}
    </button>
  );
};

export default AddFriendButton;
