import React from "react";
import { User } from "../../../types/user.t";

interface DisplayFriendProps {
  UserData: User;
}

const DisplayFriend: React.FC<DisplayFriendProps> = ({ UserData }) => {
  return (
    <div>
      <img src={UserData.profilePicture} alt="" />
      {UserData.nickName}
      <div>{UserData.status}</div>
    </div>
  );
};

export default DisplayFriend;
