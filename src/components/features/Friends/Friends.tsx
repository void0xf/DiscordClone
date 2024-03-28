import React, { useEffect, useState } from "react";
import TabTittleBar from "../../common/TabTitle/TabTittleBar";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { RiInboxFill } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import FriendsNavigation from "./FriendsNavigation";
import DisplayFriends from "./DisplayFriends";
import { DisplayFriendsTabs } from "./friends.t";
import DisplayAddFriend from "./DisplayAddFriend";
import {
  listenForIncomingFriendRequests,
  syncStateFromFirestore,
} from "../../../firebase/firestore";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "redux";

const NavFriendsIcon = () => (
  <svg
    className="linkButtonIcon__2f35b"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      className=""
    ></path>
    <path
      fill="currentColor"
      d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
      className=""
    ></path>
  </svg>
);

async function onFriendRequest(dispatch: Dispatch<UnknownAction>) {
  syncStateFromFirestore(dispatch);
}

const Friends = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState<DisplayFriendsTabs>("Online");
  useEffect(() => {
    listenForIncomingFriendRequests(() => {
      onFriendRequest(dispatch);
    });
  }, []);

  return (
    <div className="text-TextGray">
      <TabTittleBar>
        <div className="w-full flex justify-between">
          <div className="flex">
            <div className=" flex justify-start items-center px-2">
              <NavFriendsIcon />
              <span className="font-ggSansMedium text-white pl-2">Friends</span>
            </div>
            <div className="items-center flex">
              <FriendsNavigation
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </div>
          </div>
          <div className="text-3xl flex px-4 justify-center items-center">
            <div className="p-2">
              <TbMessageCircle2Filled />
            </div>
            <div className="p-2">
              <RiInboxFill />
            </div>
            <div className="">
              <MdHelp />
            </div>
          </div>
        </div>
      </TabTittleBar>
      <div>
        {selectedTab != "Add Friend" ? (
          <DisplayFriends type={selectedTab} />
        ) : (
          <DisplayAddFriend />
        )}
      </div>
    </div>
  );
};

export default Friends;
