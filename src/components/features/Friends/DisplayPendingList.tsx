import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import { getUsersFromUID } from "../../../pages/firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DisplayPendingRequest from "./DisplayPendingRequest";
import EmptyFriendsRequests from "../../../assets/banners/EmptyFriendsRequests.svg";

const DisplayPendingList = () => {
  const user = useSelector((state: RootState) => state.user);
  const [incomingpendingRequests, setIncomingPendingRequests] = useState<
    User[]
  >([]);
  const [outcomingpendingRequests, setOutcomingPendingRequests] = useState<
    User[]
  >([]);

  useEffect(() => {
    getUsersFromUID(user.incomingFriendRequests).then((result) => {
      setIncomingPendingRequests(result as User[]);
    });
    getUsersFromUID(user.outgoingFriendRequests).then((result) => {
      setOutcomingPendingRequests(result as User[]);
    });
  }, [user.incomingFriendRequests.length, user.outgoingFriendRequests.length]);

  return (
    <div className=" bg-LightGray flex-grow h-full px-8">
      <div className="py-4">
        {/* <FriendFilter
          users={usersToDisplay}
          setNewUsers={setUsersToDisplayFiltered}
        /> */}
      </div>
      {incomingpendingRequests.length + outcomingpendingRequests.length ? (
        <>
          <p className="font-ggSansBold text-xs pb-4">PENDING</p>
          {incomingpendingRequests.map((user) => {
            return <DisplayPendingRequest user={user} pendingType="Incoming" />;
          })}
          {outcomingpendingRequests.map((user) => {
            return <DisplayPendingRequest user={user} pendingType="Outgoing" />;
          })}
        </>
      ) : (
        <div className="justify-center flex items-center flex-col h-full">
          <img src={EmptyFriendsRequests} alt="" />
          <p>There are no pending friend requests. Here's Wumpus for now.</p>
        </div>
      )}
    </div>
  );
};

export default DisplayPendingList;
