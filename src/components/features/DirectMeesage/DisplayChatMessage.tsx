import React from "react";
import { Message } from "../../../firebase/firestore";

interface DisplayChatMessageProps {
  message: Message;
}

const DisplayChatMessage: React.FC<DisplayChatMessageProps> = ({ message }) => {
  return (
    <div className="text-gray-200 font-ggsansNormal items-baseline pl-14 pb-[0.5px] text-lg">
      {message.text}
    </div>
  );
};

export default DisplayChatMessage;
