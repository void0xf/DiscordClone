import React from "react";
import { DirectMessageProps } from "../../../types/DirectMessage.t";

const DirectMessage: React.FC<DirectMessageProps> = (props) => {
  const ProfilePic = props.UserInfo.profilePicture;

  return (
    <div className="flex">
      <div>{ProfilePic}</div>

      <div>
        <p>{props.UserInfo.nickName}</p>
      </div>
    </div>
  );
};

export default DirectMessage;
