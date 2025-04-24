"use client";

import React, { useState } from "react";
import { User, UserStatus } from "../../../../types/user.t";
// import UserStatusDotIndicator from "../../../common/UserStatusDotIndicator";
import { getStatusString } from "../../../../utils/userUtils/getStatusString";
import { ArrowUpDown, ChevronRight, Copy, Smile, LogOut } from "lucide-react";
import HoverDropDownMenu from "./HoverDropDownMenu";
import { useDispatch } from "react-redux";
import { setStatus } from "../../../../slices/userSlice";
import { updateUserState } from "@/firebase/firestore";
import UserStatusDotIndicator from "../../../common/UserStatusDotIndicator";
import { useAuth } from "../../../../hooks/useAuth";

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const dispatch = useDispatch();
  const [ishovering, setIshovering] = useState(false);
  const { logout } = useAuth();

  const handleStatusChange = (status: UserStatus) => {
    dispatch(setStatus(status));
    updateUserState(status);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="h-[30rem] w-[21rem] flex flex-col flex-1 bg-DarkGray rounded-xl relative">
      <div className="w-full h-16 bg-[#fca31D] rounded-t-xl"></div>
      <div className=" bg-SidebarTooltip mx-4 rounded-lg mt-12">
        <div className="absoltue">
          <div>
            <img
              src={user.profilePicture}
              alt=""
              className="rounded-full w-20 absolute top-0 translate-y-5 border-[0.35rem] border-DarkGray"
            />
          </div>
        </div>
        <div
          className="absolute top-[4.2rem] left-[3.8rem]
        "
        >
          <UserStatusDotIndicator type={user.status} />
        </div>
        <div className="border-b-[1px] border-DarkGray p-2">
          <p className="font-ggSansBold">{user.nickName}</p>
          <p className="text-sm">{user.name}</p>
        </div>
        <div className="border-b-[1px] border-DarkGray p-2 mt-4">
          <p className="font-ggSansBold text-xs">DISCORD MEMBER SINCE</p>
          <p className="font-ggsansNormal text-xs">21 Apr 2024</p>
        </div>
        <div className="p-2 mt-1 border-b-[1px] border-DarkGray">
          <div
            onMouseEnter={() => {
              setIshovering(true);
            }}
            onMouseLeave={() => {
              setIshovering(false);
            }}
            className="flex items-center justify-between cursor-pointer px-1 py-1 hover:bg-LightGray hover:rounded relative text-TextGray"
          >
            <div className="flex items-center ">
              <div className="w-5 justify-center flex">
                <div className="absolute top-0">
                  <UserStatusDotIndicator type={user.status} />
                </div>
              </div>
              <p className="pl-2 font-ggsansNormal text-base ">
                {getStatusString(user.status)}
              </p>
            </div>
            <ChevronRight width={15} />
            <div className="absolute left-full top-0 translate-x-0">
              <HoverDropDownMenu isActive={ishovering}>
                {/* div Below is here to avoid disappearing of the dropdown after mouse left DropDown Trigger Element */}
                <div className="bg-transparent rounded px-4">
                  <div className="px-2 py-2 bg-SidebarTooltip w-[14rem] rounded-md">
                    <div className="px-2 hover:bg-lightBlue hover:rounded">
                      <div
                        className="flex items-center border-b-[1px] pb-2 border-DarkGray pt-2 "
                        onClick={() => {
                          handleStatusChange(UserStatus.online);
                        }}
                      >
                        <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        <p className="pl-2">Online</p>
                      </div>
                    </div>
                    <div
                      className="px-2 hover:bg-lightBlue hover:rounded"
                      onClick={() => {
                        handleStatusChange(UserStatus.idle);
                      }}
                    >
                      <div className="flex items-center  pb-2  pt-2 ">
                        <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
                        <p className="pl-2">Idle</p>
                      </div>
                    </div>
                    <div
                      className="px-2 hover:bg-lightBlue hover:rounded"
                      onClick={() => {
                        handleStatusChange(UserStatus.DnD);
                      }}
                    >
                      <div className="flex items-center pb-2  pt-2 ">
                        <div className="bg-red-500 rounded-full w-2 h-2"></div>
                        <p className="pl-2">Do not disturb</p>
                      </div>
                    </div>
                    <div
                      className="px-2 hover:bg-lightBlue hover:rounded"
                      onClick={() => {
                        handleStatusChange(UserStatus.offline);
                      }}
                    >
                      <div className="flex items-center border-b-[1px] pb-2 border-DarkGray pt-2 ">
                        <div className="bg-gray-500 rounded-full w-2 h-2"></div>
                        <p className="pl-2">Invisible</p>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverDropDownMenu>
            </div>
          </div>
          <div className="flex cursor-pointer hover:bg-LightGray hover:rounded px-1 py-1 mt-2 text-TextGray">
            <Smile width={15} />
            <p className="pl-2 ">Set custom Status</p>
          </div>
        </div>
        <div className="p-2">
          <div className="flex cursor-pointer hover:bg-LightGray justify-between hover:rounded px-1 py-1 mt-2 text-TextGray ">
            <div className="flex">
              <ArrowUpDown width={15} />
              <p className="pl-2">Switch account</p>
            </div>
            <ChevronRight width={15} />
          </div>
        </div>
        <div className="p-2">
          <div className="flex cursor-pointer hover:bg-LightGray hover:rounded px-1 py-1 mt-2 text-TextGray ">
            <Copy width={15} />
            <p className="pl-2">Copy User ID</p>
          </div>
        </div>
        <div className="p-2 border-t-[1px] border-DarkGray">
          <div 
            className="flex cursor-pointer hover:bg-red-600 hover:text-white hover:rounded px-1 py-1 mt-2 text-TextGray"
            onClick={handleLogout}
          >
            <LogOut width={15} />
            <p className="pl-2">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
