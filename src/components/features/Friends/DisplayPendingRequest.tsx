"use client";

import React from "react";
import { User } from "../../../types/user.t";
import {
  acceptFriendRequest,
  cancelSendedFriendRequest,
  declineFriendRequest,
  syncStateFromFirestore,
} from "@/firebase/firestore";
import { useDispatch } from "react-redux";
import UserProfile from "../../common/UserProfile";
import FriendAction from "./FriendAction";
import { Check, X } from "lucide-react";

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
        <div>
          <div className="h-[1px] w-full bg-SelectedFriendTab"></div>
          <div
            className="flex justify-between border-t-[1px] border-SelectedFriendTab 
          hover:bg-SelectedUserTab rounded-md px-2 hover:cursor-pointer py-2 cursor-pointer "
          >
            <UserProfile
              UserData={user}
              showNameOnHover={true}
              showOnlineStatus={false}
              additionalInfo="Incoming Friend Request"
            />
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <FriendAction
                  icon={<Check strokeWidth={2} />}
                  label="Accept"
                  onClickHandler={() => {
                    handleAccept(user.name);
                  }}
                  hoverColor="accept"
                />
                <FriendAction
                  icon={<X strokeWidth={2} />}
                  label="Igonore"
                  onClickHandler={() => {
                    handleDecline(user.name);
                  }}
                  hoverColor="decline"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="h-[1px] w-full bg-SelectedFriendTab"></div>
          <div className="flex justify-between px-2 py-2 cursor-pointer hover:bg-SelectedUserTab">
            <UserProfile
              UserData={user}
              showNameOnHover={true}
              showOnlineStatus={false}
              additionalInfo="Outgoing Friend Request"
            />
            <div className="flex gap-4 items-center">
              <div>
                <FriendAction
                  icon={<X />}
                  label="Cancel"
                  onClickHandler={() => {
                    handleCancelRequest(user.name);
                  }}
                  hoverColor="decline"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayPendingRequest;
