import React from "react";
import { User } from "../../../types/user.t";
import DisplayFriend from "./DisplayFriend";

interface DisplayFriendsProps {
  type: string;
}

const users: User[] = [];

const DisplayFriends: React.FC<DisplayFriendsProps> = ({ type }) => {
  return (
    <div className=" bg-LightGray flex-grow">
      <p>{type}</p>

      {users.map((user) => {
        return <DisplayFriend UserData={user} />;
      })}
    </div>
  );
};

export default DisplayFriends;
