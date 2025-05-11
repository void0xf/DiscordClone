"use client";

import React, { useState } from "react";
import { User, UserStatus } from "../../../../types/user.t";
// import UserStatusDotIndicator from "../../../common/UserStatusDotIndicator";
import { getStatusString } from "../../../../utils/userUtils/getStatusString";
import { ArrowUpDown, ChevronRight, Copy, Smile, LogOut, Settings } from "lucide-react";
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
  const [isHoveringCopyId, setIsHoveringCopyId] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleStatusChange = (status: UserStatus) => {
    dispatch(setStatus(status));
    updateUserState(status);
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleCopyUserId = () => {
    // Use a dummy ID if user.id is not available
    navigator.clipboard.writeText(user.id || "123456789012345678");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Discord's default banner color
  const bannerColor = "#5865F2"; 

  return (
    <div className="h-auto w-[340px] flex flex-col flex-1 bg-[#232428] rounded-lg shadow-xl  animate-fadeIn">
      {/* Banner */}
      <div 
        className="w-full h-[60px] relative" 
        style={{ backgroundColor: bannerColor }}
      ></div>

      {/* Profile Section */}
      <div className="bg-[#232428] rounded-lg relative pb-3">
        <div className="px-4">
          {/* Avatar with status indicator */}
          <div className="relative">
            <img
              src={user.profilePicture}
              alt={`${user.nickName}'s avatar`}
              className="rounded-full w-[80px] h-[80px] border-[6px] border-[#232428] -mt-[40px] object-cover bg-[#232428]"
            />
            <div className="absolute bottom-0 right-0 border-[3px] border-[#232428] rounded-full">
              <UserStatusDotIndicator type={user.status} />
            </div>
          </div>

          {/* Username and tag */}
          <div className="mt-2">
            <div className="flex items-center">
              <h2 className="font-ggSansBold text-white text-xl">{user.nickName}</h2>
            </div>
            <p className="text-[#B9BBBE] text-sm">@{user.name}</p>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#2D2F32] my-3"></div>

          {/* Discord Member Since */}
          <div className="mb-3">
            <p className="font-ggSansBold text-xs text-[#B9BBBE] uppercase tracking-wide">Discord Member Since</p>
            <p className="text-[#B9BBBE] text-sm">21 Apr 2024</p>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#2D2F32] my-3"></div>

          {/* Status Selector */}
          <div className="mb-1 relative">
            <div
              onMouseEnter={() => setIshovering(true)}
              onMouseLeave={() => setIshovering(false)}
              className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-[#36373D] transition-colors duration-200 hover:rounded-md relative text-[#B9BBBE]"
            >
              <div className="flex items-center">
                <div className="w-5 justify-center flex">
                  <UserStatusDotIndicator type={user.status} />
                </div>
                <p className="pl-2 text-[#DCDDDE]">
                  {getStatusString(user.status)}
                </p>
              </div>
              <ChevronRight className="text-[#B9BBBE]" width={16} />
              <div className="absolute left-full top-0 z-20">
                <HoverDropDownMenu isActive={ishovering}>
                  <div className="bg-transparent rounded px-2">
                    <div className="px-2 py-2 bg-[#2B2D31] w-[200px] rounded-md shadow-lg border border-[#1a1b1e]">
                      {/* Status Options */}
                      <div className="px-2 hover:bg-[#36373D] hover:rounded-md transition-colors duration-150">
                        <div
                          className="flex items-center py-2"
                          onClick={() => handleStatusChange(UserStatus.online)}
                        >
                          <div className="bg-green-500 rounded-full w-2.5 h-2.5"></div>
                          <p className="pl-3 text-[#DCDDDE]">Online</p>
                        </div>
                      </div>
                      <div className="px-2 hover:bg-[#36373D] hover:rounded-md transition-colors duration-150">
                        <div
                          className="flex items-center py-2"
                          onClick={() => handleStatusChange(UserStatus.idle)}
                        >
                          <div className="bg-yellow-500 rounded-full w-2.5 h-2.5"></div>
                          <p className="pl-3 text-[#DCDDDE]">Idle</p>
                          <p className="text-xs text-[#B9BBBE] ml-1">·</p>
                          <p className="text-xs text-[#B9BBBE] ml-1">AFK</p>
                        </div>
                      </div>
                      <div className="px-2 hover:bg-[#36373D] hover:rounded-md transition-colors duration-150">
                        <div
                          className="flex items-center py-2"
                          onClick={() => handleStatusChange(UserStatus.DnD)}
                        >
                          <div className="bg-red-500 rounded-full w-2.5 h-2.5"></div>
                          <p className="pl-3 text-[#DCDDDE]">Do Not Disturb</p>
                        </div>
                      </div>
                      <div className="px-2 hover:bg-[#36373D] hover:rounded-md transition-colors duration-150">
                        <div
                          className="flex items-center py-2"
                          onClick={() => handleStatusChange(UserStatus.offline)}
                        >
                          <div className="bg-gray-500 rounded-full w-2.5 h-2.5"></div>
                          <p className="pl-3 text-[#DCDDDE]">Invisible</p>
                        </div>
                      </div>
                      <div className="h-[1px] bg-[#2D2F32] my-1 mx-2"></div>
                      <div className="px-2 hover:bg-[#36373D] hover:rounded-md transition-colors duration-150">
                        <div className="flex items-center py-2">
                          <div className="w-2.5 h-2.5 flex items-center justify-center">
                            <Smile className="text-[#B9BBBE]" width={14} />
                          </div>
                          <p className="pl-3 text-[#DCDDDE]">Custom Status</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverDropDownMenu>
              </div>
            </div>
          </div>

          {/* Custom Status Button */}
          <div 
            className="flex cursor-pointer hover:bg-[#36373D] hover:rounded-md px-2 py-2 mb-1 text-[#B9BBBE] transition-colors duration-200"
          >
            <Smile className="text-[#B9BBBE]" width={16} />
            <p className="pl-2 text-[#DCDDDE]">Set Custom Status</p>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#2D2F32] my-2"></div>

          {/* Switch Account */}
          <div className="flex cursor-pointer hover:bg-[#36373D] justify-between hover:rounded-md px-2 py-2 mb-1 text-[#B9BBBE] transition-colors duration-200">
            <div className="flex items-center">
              <ArrowUpDown className="text-[#B9BBBE]" width={16} />
              <p className="pl-2 text-[#DCDDDE]">Switch Accounts</p>
            </div>
            <ChevronRight className="text-[#B9BBBE]" width={16} />
          </div>

          {/* User Settings */}
          <div className="flex cursor-pointer hover:bg-[#36373D] justify-between hover:rounded-md px-2 py-2 mb-1 text-[#B9BBBE] transition-colors duration-200">
            <div className="flex items-center">
              <Settings className="text-[#B9BBBE]" width={16} />
              <p className="pl-2 text-[#DCDDDE]">User Settings</p>
            </div>
          </div>

          {/* Copy User ID */}
          <div 
            className="flex cursor-pointer hover:bg-[#36373D] hover:rounded-md px-2 py-2 mb-1 text-[#B9BBBE] transition-colors duration-200 relative"
            onClick={handleCopyUserId}
            onMouseEnter={() => setIsHoveringCopyId(true)}
            onMouseLeave={() => setIsHoveringCopyId(false)}
          >
            <Copy className="text-[#B9BBBE]" width={16} />
            <p className="pl-2 text-[#DCDDDE]">{copied ? "ID Copied!" : "Copy User ID"}</p>
            
            {/* Tooltip */}
            {isHoveringCopyId && !copied && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Copy ID: {user.id || "123456789012345678"}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#2D2F32] my-2"></div>

          {/* Logout Button */}
          <div 
            className="flex cursor-pointer hover:bg-[#ED4245] hover:text-white hover:rounded-md px-2 py-2 text-[#ED4245] transition-colors duration-200"
            onClick={handleLogout}
          >
            <LogOut width={16} />
            <p className="pl-2 font-medium">Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
