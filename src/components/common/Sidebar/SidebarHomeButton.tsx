"use client";
import React, { useEffect, useState } from "react";
import DiscordLogoSidebarHomeButton from "../../../assets/icons/Sidebar/DiscordLogoSidebar.svg";
import SidebarDot from "./SidebarDot";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarCurrentButton } from "../../../slices/sidebarSlice";
import { RootState } from "../../../store/store";
import NotificationCounterDot from "../NotificationCounterDot";
import Image from "next/image";

interface SidebarHomeButtonProps {
  onClickHandler: () => void;
}

const SidebarHomeButton: React.FC<SidebarHomeButtonProps> = ({
  onClickHandler,
}) => {
  const [doAnimation, setDoAnimation] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sidebarState = useSelector((state: RootState) => state.sidebar);
  const user = useSelector((state: RootState) => state.user);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setIsSelected(sidebarState === "@me");
  }, [sidebarState]);

  useEffect(() => {
    user.incomingFriendRequests.length > 0
      ? setShowNotification(true)
      : setShowNotification(false);
  }, [user.incomingFriendRequests.length]);

  const handleAnimation = () => {
    setDoAnimation(true);
    setTimeout(() => {
      setDoAnimation(false);
    }, 100);
  };

  const handleOnClick = () => {
    handleAnimation();
    onClickHandler();
    dispatch(setSidebarCurrentButton("@me"));
  };

  return (
    <button
      onClick={handleOnClick}
      className={`focus:outline-none relative transition-all duration-75 
    ${doAnimation ? "translate-y-0.5" : "translate-y-0"}`}
    >
      <div
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        className={`w-12 h-12 mx-auto my-1 text-center flex justify-center items-center transition duration-800 ease-linear hover:rounded-2xl bg-SidebarServerWithoutIcon hover:bg-lightBlue
                    ${isSelected ? "bg-lightBlue rounded-2xl" : "rounded-full"}
                    `}
      >
        <Image
          src={DiscordLogoSidebarHomeButton}
          alt=""
          className="w-[30px] h-[30px] text-white"
        />
        <SidebarDot
          isHover={isHovering}
          isSelected={isSelected}
          notification={false}
        />
        {showNotification ? (
          <div className="absolute items-center flex justify-center text-center right-0 bottom-0 border-DarkGray border-[4px] rounded-full">
            <NotificationCounterDot
              NotifcaiotnCount={user.incomingFriendRequests.length}
            />
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default SidebarHomeButton;
