import React, { useState } from "react";
import { User } from "../../types/user.t";
import { getStatusString } from "../utlis/user";

export interface UserProfileProps {
  UserData: User;
  showNameOnHover: boolean;
  showOnlineStatus: boolean;
  additionalInfo: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  UserData,
  showNameOnHover,
  showOnlineStatus,
  additionalInfo,
}) => {
  const [ishovering, setIshovering] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-full ">
        <img
          src={UserData.profilePicture}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div
        onMouseEnter={() => {
          setIshovering(true);
        }}
        onMouseLeave={() => {
          setIshovering(false);
        }}
      >
        <div className="flex gap-2 items-baseline">
          <p className=" font-semibold text-white text-md mt-1">
            {UserData.nickName}
          </p>
          {ishovering && showNameOnHover && <p>{UserData.name}</p>}
        </div>
        {additionalInfo !== "" ? (
          <p className="text-xs font-ggSansBold">{additionalInfo}</p>
        ) : null}
        {showOnlineStatus ? <p>{getStatusString(UserData.status)}</p> : null}
      </div>
      <div></div>
    </div>
  );
};

export default UserProfile;
