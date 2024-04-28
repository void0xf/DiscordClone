import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import FriendFilter from "./FriendFilter";
import { DisplayFriendsTabs } from "./friends.t";
import DisplayFriend from "./DisplayFriend";
import EmptyAllFriendsBanner from "../../../assets/banners/EmptyAllFriends.svg";
import EmptyOnlineFriendsBanner from "../../../assets/banners/EmptyOnlineFriends.svg";

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

  return usersToDisplayFiltered.length > 0 ? (
    <div className=" bg-LightGray flex-grow h-full px-8">
      <div className="py-4">
        <FriendFilter
          users={usersToDisplay}
          setNewUsers={setUsersToDisplayFiltered}
        />
      </div>
      <p className="font-ggSansBold text-xs pb-2">{type.toLocaleUpperCase()}</p>
      <>
        {usersToDisplayFiltered.map((user) => (
          <DisplayFriend UserData={user} />
        ))}
      </>
    </div>
  ) : type === "All" ? (
    <div className="flex-col flex justify-center items-center bg-LightGray h-full">
      <img src={EmptyAllFriendsBanner} alt="Wumps" />
      <p>Wumpus is waiting on friends. You don't have to, though!</p>
    </div>
  ) : (
    <div className="flex-col flex justify-center items-center bg-LightGray h-full">
      <img src={EmptyOnlineFriendsBanner} alt="Wumps" />
      <p>No one's around to play with Wumpus!</p>
    </div>
  );
};

export default DisplayFriendsList;
