"use client";
import React, { useEffect, useState } from "react";
import TabTittleBar from "../../common/TabTitle/TabTittleBar";
import { Inbox } from "lucide-react";
import { HelpCircle } from "lucide-react";
import FriendsNavigation from "./FriendsNavigation";
import { DisplayFriendsTabs } from "./friends.t";
import DisplayAddFriend from "./DisplayAddFriend";
import {
  getOnlineUsersFromUID,
  getUsersFromUID,
  listenToUserStatuses,
} from "@/firebase/firestore";
import { useSelector } from "react-redux";
import DisplayFriendsList from "./DisplayAllFriendsList";
import { User } from "../../../types/user.t";
import { RootState } from "../../../store/store";
import DisplayPendingList from "./DisplayPendingList";

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

const fetchAllFriends = async (user: User) => {
  const users = await getUsersFromUID(user.friends);
  return users as User[];
};

const fetchOnlineFriends = async (user: User) => {
  const users = await getOnlineUsersFromUID(user.friends);
  return users as User[];
};

const Friends = () => {
  const user = useSelector((state: RootState) => state.user);
  const [selectedTab, setSelectedTab] = useState<DisplayFriendsTabs>("Online");
  const [allFriends, setAllFriends] = useState<User[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<User[]>([]);

  useEffect(() => {
    async function getAllFriends() {
      const friends = await fetchAllFriends(user);
      setAllFriends(friends);
    }
    async function getOnlineFriends() {
      const friends = await fetchOnlineFriends(user);
      setOnlineFriends(friends);
    }
    const sub = listenToUserStatuses(user.friends, () => {
      getOnlineFriends();
      getAllFriends();
    });

    getAllFriends();
    getOnlineFriends();
    return () => {
      sub();
    };
  }, [user.friends.length]);

  return (
    <div className="text-TextGray flex flex-auto flex-col">
      <TabTittleBar>
        <div className="w-full flex justify-between">
          <div className="flex">
            <div className=" flex justify-start items-center px-4">
              <NavFriendsIcon />
              <span className="font-ggSansMedium text-white pl-2">Friends</span>
              <div className="h-6 w-[1px] bg-SelectedFriendTab ml-4"></div>
            </div>
            <div className="items-center flex">
              <FriendsNavigation
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </div>
          </div>
          <div className="text-3xl flex px-4 justify-center items-center">
            <div className="p-2">{/* <TbMessageCircle2Filled /> */}</div>
            <div className="p-2">
              <Inbox />
            </div>
            <div className="">
              <HelpCircle />
            </div>
          </div>
        </div>
      </TabTittleBar>
      <div className="h-full">
        {selectedTab == "All" ? (
          <DisplayFriendsList type={selectedTab} items={allFriends} />
        ) : selectedTab == "Pending" ? (
          <DisplayPendingList />
        ) : selectedTab == "Blocked" ? (
          <DisplayFriendsList type={selectedTab} items={[]} />
        ) : selectedTab == "Online" ? (
          <DisplayFriendsList type={selectedTab} items={onlineFriends} />
        ) : (
          <DisplayAddFriend />
        )}
      </div>
    </div>
  );
};

export default Friends;
