import React, { useRef, useState } from "react";
import { User } from "../../../types/user.t";
import { FaMicrophone } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { TbSettingsFilled } from "react-icons/tb";
import UserStatusDotIndicator from "../../common/UserStatusDotIndicator";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import { getStatusString } from "../../../utils/userUtils/getStatusString";
import useOutsideClick from "../../../hooks/useOutsideClick";

const UserProfileHomeNavigation: React.FC<{ user: User }> = ({ user }) => {
  const [showUserProfileCard, setShowUserProfileCard] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeUserProfileCard = () => {
    setShowUserProfileCard(false);
  };
  useOutsideClick(modalRef, closeUserProfileCard);

  return (
    <div
      ref={modalRef}
      className="h-14 w-full bg-DarkGray text-white flex justify-between items-center px-1  relative"
    >
      <div className="absolute bottom-14 -translate-x-8 -translate-y-4 z-20">
        {showUserProfileCard && (
          <div>
            <UserProfileCard user={user} />
          </div>
        )}
      </div>
      <div
        className="text-sm flex gap-2 hover:bg-HoverText hover:rounded-md px-1 py-2 cursor-pointer"
        onClick={() => {
          setShowUserProfileCard(!showUserProfileCard);
        }}
      >
        <div>
          <div className="relative">
            <img
              src={user.profilePicture}
              alt=""
              width={34}
              height={34}
              className="rounded-full"
            />
            <div className="absolute top-[0.8rem] h-8 w-8 left-[0.8rem]">
              <UserStatusDotIndicator type={user.status} />
            </div>
          </div>
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
