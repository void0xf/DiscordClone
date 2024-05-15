"use client";

import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import FriendFilter from "./FriendFilter";
import { DisplayFriendsTabs } from "./friends.t";
import DisplayFriend from "./DisplayFriend";
import EmptyAllFriendsBanner from "@/src/assets/banners/EmptyAllFriends.svg";
import EmptyOnlineFriendsBanner from "@/src/assets/banners/EmptyOnlineFriends.svg";
import Image from "next/image";

const DisplayFriendsList: React.FC<{
  type: DisplayFriendsTabs;
  items: User[];
}> = ({ type, items }) => {
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);
  const [usersToDisplayFiltered, setUsersToDisplayFiltered] = useState<User[]>(
    []
  );

  useEffect(() => {
    setUsersToDisplay(items);
    setUsersToDisplayFiltered(items);
  }, [items]);

  return (
    <div className="bg-LightGray flex-grow h-full px-8">
      <div className="py-4">
        <FriendFilter
          users={usersToDisplay}
          setNewUsers={setUsersToDisplayFiltered}
        />
      </div>
      <p className="font-ggSansBold text-xs pb-2">{type.toLocaleUpperCase()}</p>
      {usersToDisplayFiltered.length > 0 ? (
        <>
          {usersToDisplayFiltered.map((user) => (
            <DisplayFriend UserData={user} />
          ))}
        </>
      ) : type === "All" ? (
        <div className="flex-col flex justify-center items-center bg-LightGray h-full">
          <Image src={EmptyAllFriendsBanner} alt="Wumps" />
          <p>Wumpus is waiting on friends. You don't have to, though!</p>
        </div>
      ) : (
        <div className="flex-col flex justify-center items-center bg-LightGray h-full">
          <Image src={EmptyOnlineFriendsBanner} alt="Wumps" />
          <p>Looks like you don’t have any friends in this category.</p>
        </div>
      )}
    </div>
  );
};

export default DisplayFriendsList;
