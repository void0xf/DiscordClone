"use client";

import React from "react";
import { DirectMessageProps } from "../../../types/DirectMessage.t";
import { findConversation, getUIDfromName } from "@/src/firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DirectMessageUserProfile from "./DirectMessageUserProfile";
import { useRouter } from "next/navigation";

const DirectMessage: React.FC<DirectMessageProps> = ({
  UserInfo,
  isActive,
}) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const handleNavigateToConverstaion = async () => {
    const targetUID = (await getUIDfromName(UserInfo.name)) as string;
    const myUID = (await getUIDfromName(user.name)) as string;
    findConversation(targetUID, myUID).then((conversationId) => {
      if (conversationId) {
        router.push(`/channels/${conversationId}`);
      }
    });
  };

  return (
    <div
      className={`hover:bg-SelectedUserTab ${
        isActive ? "bg-SelectedFriendTab" : ""
      } rounded-md hover:cursor-pointer px-2 }`}
      onClick={() => {
        handleNavigateToConverstaion();
      }}
    >
      <DirectMessageUserProfile UserData={UserInfo} />
    </div>
  );
};

export default DirectMessage;
