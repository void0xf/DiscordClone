"use client";

import React from "react";
import { User } from "../../../types/user.t";
import {
  addStrangerToUserDMs,
  createConversation,
  findConversation,
  getUIDfromName,
  syncStateFromFirestore,
} from "@/firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../../common/UserProfile";
import { MessageCircle } from "lucide-react";
import { Plus } from "lucide-react";

import FriendAction from "./FriendAction";
import { RootState } from "../../../store/store";
import { redirect, useRouter } from "next/navigation";

interface DisplayFriendProps {
  UserData: User;
}

const DisplayFriend: React.FC<DisplayFriendProps> = ({ UserData }) => {
  const dispatch = useDispatch();
  const myUser = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const handleSendMessage = async () => {
    const uid = (await getUIDfromName(UserData.name)) as string;
    const myuid = (await getUIDfromName(myUser.name)) as string;
    const conversationId = await findConversation(uid, myuid);

    if (conversationId) {
      addStrangerToUserDMs(uid, myuid); // incase user deleted stranger from Dms
      syncStateFromFirestore(dispatch);
      console.log(conversationId);
      router.push(`/channels/${conversationId}`);
    } else {
      const createdConversationId = await createConversation(uid);
      syncStateFromFirestore(dispatch);
      redirect(`/channels/${createdConversationId}`);
    }
  };

  return (
    <div className="">
      <div className="h-[1px] w-full bg-SelectedFriendTab"></div>
      <div
        className="hover:bg-SelectedUserTab rounded-md px-2 hover:cursor-pointer py-1"
        onClick={() => {
          handleSendMessage();
        }}
      >
        <div className="flex justify-between">
          <UserProfile
            UserData={UserData}
            showNameOnHover={true}
            showOnlineStatus={true}
            additionalInfo=""
          />
          <div className="flex gap-2 items-center">
            <FriendAction
              icon={<MessageCircle />}
              label="Message"
              onClickHandler={handleSendMessage}
              hoverColor="default"
            />
            <FriendAction
              icon={<Plus />}
              label="More"
              onClickHandler={() => {}}
              hoverColor="default"
              showContextMenu={true}
              user={UserData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFriend;
