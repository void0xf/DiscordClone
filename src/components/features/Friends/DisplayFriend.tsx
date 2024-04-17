import React from "react";
import { User } from "../../../types/user.t";
import {
  addStrangerToUserDMs,
  createConversation,
  findConversation,
  getUIDfromName,
  syncStateFromFirestore,
} from "../../../firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../../common/UserProfile";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import FriendAction from "./FriendAction";
import { RootState } from "../../../store/store";

interface DisplayFriendProps {
  UserData: User;
}

const DisplayFriend: React.FC<DisplayFriendProps> = ({ UserData }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const myUser = useSelector((state: RootState) => state.user);

  const handleSendMessage = async () => {
    const uid = (await getUIDfromName(UserData.name)) as string;
    const myuid = (await getUIDfromName(myUser.name)) as string;
    const conversationId = await findConversation(uid, myuid);

    if (conversationId) {
      addStrangerToUserDMs(uid, myuid); // incase user deleted stranger from Dms
      syncStateFromFirestore(dispatch);
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
