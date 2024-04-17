import React from "react";
import { DirectMessageProps } from "../../../types/DirectMessage.t";
import { findConversation, getUIDfromName } from "../../../firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DirectMessageUserProfile from "./DirectMessageUserProfile";

const DirectMessage: React.FC<DirectMessageProps> = ({ UserInfo }) => {
  const user = useSelector((state: RootState) => state.user);
  const nav = useNavigate();
  const handleNavigateToConverstaion = async () => {
    const targetUID = (await getUIDfromName(UserInfo.name)) as string;
    const myUID = (await getUIDfromName(user.name)) as string;
    findConversation(targetUID, myUID).then((conversationId) => {
      if (conversationId) {
        nav(`/channels/${conversationId}`);
      }
    });
  };

  return (
    <div
      className={`hover:bg-SelectedUserTab rounded-md hover:cursor-pointer px-2 }`}
      onClick={() => {
        handleNavigateToConverstaion();
      }}
    >
      <DirectMessageUserProfile UserData={UserInfo} />
    </div>
  );
};

export default DirectMessage;
