import React from "react";
import { User } from "../../../types/user.t";
import { FaMicrophone } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { TbSettingsFilled } from "react-icons/tb";
import { getStatusString } from "../../utlis/user";

const UserProfileHomeNavigation: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="h-14 w-full bg-DarkGray text-white flex justify-between items-center px-2">
      <div className="text-sm flex gap-2">
        <div>
          <img
            src={user.profilePicture}
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <p>{user.name}</p>
          <p className="text-gray-400 text-xs">
            {getStatusString(user.status)}
          </p>
        </div>
      </div>
      <div className="flex align-baseline text-xl text-gray-400">
        <button className="hover:bg-HoverText rounded-md h-7 w-7 items-center flex justify-center">
          <FaMicrophone />
        </button>
        <button className="hover:bg-HoverText rounded-md h-7 w-7 items-center flex justify-center">
          <FaHeadphonesSimple />
        </button>
        <button className="hover:bg-HoverText rounded-md h-7 w-7 items-center flex justify-center">
          <TbSettingsFilled />
        </button>
      </div>
    </div>
  );
};

export default UserProfileHomeNavigation;
