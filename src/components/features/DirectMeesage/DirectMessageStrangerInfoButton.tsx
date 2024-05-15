"use client";

import React from "react";

interface DirectMessageStrangerInfoButtonProps {
  label: string;
  onClick: () => void;
}

const DirectMessageStrangerInfoButton: React.FC<
  DirectMessageStrangerInfoButtonProps
> = ({ label, onClick }) => {
  return (
    <button
      className="bg-DirectMessageStrangerInfoButton px-4 py-1 rounded-sm hover:bg-gray-500 transition-colors duration-200"
      onClick={() => {
        onClick();
      }}
    >
      <p className="text-whiteMain text-xs font-ggSansMedium">{label}</p>
    </button>
  );
};

export default DirectMessageStrangerInfoButton;
