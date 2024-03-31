import React from "react";
import { User } from "../../../types/user.t";
import {
  createConversation,
  findConversation,
  getUIDfromName,
  syncStateFromFirestore,
} from "../../../firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserProfile from "../../common/UserProfile";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import FriendAction from "./FriendAction";

interface DisplayFriendProps {
  UserData: User;
}

const DisplayFriend: React.FC<DisplayFriendProps> = ({ UserData }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSendMessage = async () => {
    const uid = (await getUIDfromName(UserData.name)) as string;
    const conversationId = await findConversation(uid);
    if (conversationId) {
      nav(`/channels/${conversationId}`);
    } else {
      const createdConversationId = await createConversation(uid);
      nav(`/channels/${createdConversationId}`);
      syncStateFromFirestore(dispatch);
    }
  };

  return (
    <div className="">
      <div className="h-[1px] w-full bg-SelectedFriendTab"></div>
      <div
        className="hover:bg-SelectedUserTab rounded-md px-2 hover:cursor-pointer py-1"
        onClick={() => {}}
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
              icon={<BiSolidMessageRounded />}
              label="Message"
              onClickHandler={handleSendMessage}
              hoverColor="default"
            />
            <FriendAction
              icon={<IoMdMore />}
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
