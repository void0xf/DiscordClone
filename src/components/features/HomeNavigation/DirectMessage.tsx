import React from "react";
import { DirectMessageProps } from "../../../types/DirectMessage.t";
import { findConversation, getUIDfromName } from "../../../firebase/firestore";
import { useNavigate } from "react-router-dom";

const DirectMessage: React.FC<DirectMessageProps> = ({ UserInfo }) => {
  const nav = useNavigate();
  const handleNavigateToConverstaion = async () => {
    const targetUID = (await getUIDfromName(UserInfo.name)) as string;
    findConversation(targetUID).then((conversationId) => {
      if (conversationId) {
        nav(`/channels/${conversationId}`);
      }
    });
  };

  return (
    <button
      onClick={() => {
        handleNavigateToConverstaion();
      }}
    >
      <div className="flex">
        <div>{UserInfo.name}</div>
      </div>
    </button>
  );
};

export default DirectMessage;
