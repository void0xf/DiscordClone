import React, { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import { getUsersFromUID } from "../../../firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DisplayPendingRequest from "./DisplayPendingRequest";

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
      <p className="font-ggSansBold text-xs pb-4">PENDING</p>
      <>
        {incomingpendingRequests.map((user) => {
          return <DisplayPendingRequest user={user} pendingType="Incoming" />;
        })}
        {outcomingpendingRequests.map((user) => {
          return <DisplayPendingRequest user={user} pendingType="Outgoing" />;
        })}
      </>
    </div>
  );
};

export default DisplayPendingList;
