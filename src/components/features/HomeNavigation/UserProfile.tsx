import React from "react";
import { User } from "../../../types/user.t";
import { FaMicrophone } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { TbSettingsFilled } from "react-icons/tb";

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="h-16 w-full bg-DarkGray text-white flex justify-between items-center px-2">
      {user.nickName}
      <div className="flex gap-2 align-baseline text-xl">
        <FaMicrophone />
        <FaHeadphonesSimple />
        <TbSettingsFilled />
      </div>
    </div>
  );
};

export default UserProfile;
