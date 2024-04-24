import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import FriendFilter from "./FriendFilter";
import { DisplayFriendsTabs } from "./friends.t";
import DisplayFriend from "./DisplayFriend";

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
    <div className=" bg-LightGray flex-grow h-full px-8">
      <div className="py-4">
        <FriendFilter
          users={usersToDisplay}
          setNewUsers={setUsersToDisplayFiltered}
        />
      </div>
      <p className="font-ggSansBold text-xs pb-4">{type.toLocaleUpperCase()}</p>
      <>
        {usersToDisplayFiltered.map((user) => (
          <DisplayFriend UserData={user} />
        ))}
      </>
    </div>
  );
};

export default DisplayFriendsList;
