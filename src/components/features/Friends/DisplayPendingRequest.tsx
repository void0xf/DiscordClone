import React from "react";
import { User } from "../../../types/user.t";
import {
  acceptFriendRequest,
  cancelSendedFriendRequest,
  declineFriendRequest,
  syncStateFromFirestore,
} from "../../../firebase/firestore";
import { useDispatch } from "react-redux";

type PendingRequestType = "Incoming" | "Outgoing";

const DisplayPendingRequest: React.FC<{
  user: User;
  pendingType: PendingRequestType;
}> = ({ user, pendingType }) => {
  const dispatch = useDispatch();

  const handleAccept = async (name: string) => {
    await acceptFriendRequest(name);
    await syncStateFromFirestore(dispatch);
  };

  const handleDecline = async (name: string) => {
    await declineFriendRequest(name);
    await syncStateFromFirestore(dispatch);
  };

  const handleCancelRequest = async (name: string) => {
    await cancelSendedFriendRequest(name);
    await syncStateFromFirestore(dispatch);
  };

  return (
    <div>
      {pendingType === "Incoming" ? (
        <div className="flex">
          <div>{user.name}</div>
          <button
            onClick={() => {
              handleAccept(user.name);
            }}
          >
            Accept
          </button>
          <button
            onClick={() => {
              handleDecline(user.name);
            }}
          >
            Decline
          </button>
        </div>
      ) : (
        <div className="flex">
          <div>{user.name}</div>
          <button
            onClick={() => {
              handleCancelRequest(user.name);
            }}
          >
            Cancel Friend Request
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayPendingRequest;
