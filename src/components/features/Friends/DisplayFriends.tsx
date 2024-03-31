import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import DisplayFriend from "./DisplayFriend";
import { DisplayFriendsTabs } from "./friends.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getUsersFromUID } from "../../../firebase/firestore";
import DisplayPendingRequest from "./DisplayPendingRequest";
import FriendFilter from "./FriendFilter";

const DisplayFriends: React.FC<{ type: DisplayFriendsTabs }> = ({ type }) => {
  const user = useSelector((state: RootState) => state.user);

  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);
  const [usersToDisplayFiltered, setUsersToDisplayFiltered] = useState<User[]>(
    []
  );
  const [incomingpendingRequests, setIncomingPendingRequests] = useState<
    User[]
  >([]);
  const [outcomingpendingRequests, setOutcomingPendingRequests] = useState<
    User[]
  >([]);

  useEffect(() => {
    if (type == "All") {
      getUsersFromUID(user.friends).then((result) => {
        setUsersToDisplay(result as User[]);
        setUsersToDisplayFiltered(result as User[]);
      });
    } else if (type == "Pending") {
      getUsersFromUID(user.incomingFriendRequests).then((result) => {
        setIncomingPendingRequests(result as User[]);
      });
      getUsersFromUID(user.outgoingFriendRequests).then((result) => {
        setOutcomingPendingRequests(result as User[]);
      });
    }
  }, [type, user]);

  return (
    <div className=" bg-LightGray flex-grow h-full px-8">
      <div className="py-4">
        <FriendFilter
          users={usersToDisplay}
          setNewUsers={setUsersToDisplayFiltered}
        />
      </div>
      <p className="font-ggSansBold text-xs pb-4">{type.toLocaleUpperCase()}</p>
      {type == "Pending" ? (
        <>
          {incomingpendingRequests.map((user) => {
            return <DisplayPendingRequest user={user} pendingType="Incoming" />;
          })}
          {outcomingpendingRequests.map((user) => {
            return <DisplayPendingRequest user={user} pendingType="Outgoing" />;
          })}
        </>
      ) : type == "All" ? (
        usersToDisplayFiltered.map((user) => <DisplayFriend UserData={user} />)
      ) : null}
    </div>
  );
};

export default DisplayFriends;
