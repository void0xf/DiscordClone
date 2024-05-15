import React, { useState } from "react";
import { User } from "../../../types/user.t";
import { X } from "lucide-react";
import {
  getUIDfromName,
  removeFromUserFromDms,
  syncStateFromFirestore,
} from "../../../pages/firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface DirectMessageUserProfileProps {
  UserData: User;
}

const DirectMessageUserProfile: React.FC<DirectMessageUserProfileProps> = ({
  UserData,
}) => {
  const [isHovering, setisHovering] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleRemoveDirectMessage = (event: React.MouseEvent) => {
    event.stopPropagation();
    getUIDfromName(UserData.name).then((uid) => {
      if (!uid) return;
      removeFromUserFromDms(uid as string);
    });
    syncStateFromFirestore(dispatch);
    nav("/channels/@me");
  };

  return (
    <div
      className="flex items-center justify-between py-2"
      onMouseEnter={() => {
        setisHovering(true);
      }}
      onMouseLeave={() => {
        setisHovering(false);
      }}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 mr-2">
          <img
            src={UserData.profilePicture}
            alt={`${UserData.name} (DirectMessage)`}
            className="rounded-full object-cover"
          />
        </div>
        <div>{UserData.name}</div>
      </div>
      {isHovering && (
        <div
          className="pl-6 pt-1 flex"
          onClick={(e) => {
            handleRemoveDirectMessage(e);
          }}
        >
          <X size={20} />
        </div>
      )}
    </div>
  );
};

export default DirectMessageUserProfile;
