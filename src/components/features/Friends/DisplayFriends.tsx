import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import DisplayFriend from "./DisplayFriend";
import { DisplayFriendsTabs } from "./friends.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getUserStateFromFirestore } from "../../../firebase/firestore";
import DisplayPendingRequest from "./DisplayPendingRequest";

async function getUsersFromUID(userIds: string[]) {
  const usersPromises = userIds.map((userId) => {
    return getUserStateFromFirestore(userId);
  });

  const users = await Promise.all(usersPromises);
  return users.filter(Boolean);
}

const DisplayFriends: React.FC<{ type: DisplayFriendsTabs }> = ({ type }) => {
  const user = useSelector((state: RootState) => state.user);

  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);
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
    <div className=" bg-LightGray flex-grow">
      <p>{type}</p>
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
        usersToDisplay.map((user) => <DisplayFriend UserData={user} />)
      ) : null}
    </div>
  );
};

export default DisplayFriends;
