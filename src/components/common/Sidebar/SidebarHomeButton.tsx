import React, { useEffect, useState } from "react";
import DiscordLogoSidebarHomeButton from "../../../assets/icons/Sidebar/DiscordLogoSidebar.svg";
import SidebarDot from "./SidebarDot";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarCurrentButton } from "../../../slices/sidebarSlice";
import { RootState } from "../../../store/store";

interface SidebarHomeButtonProps {
  onClickHandler: () => void;
}

const SidebarHomeButton: React.FC<SidebarHomeButtonProps> = ({
  onClickHandler,
}) => {
  const [doAnimation, setDoAnimation] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sidebarState = useSelector((state: RootState) => state.sidebar);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsSelected(sidebarState === "@me");
    console.log(isSelected);
  }, [sidebarState]);

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
        <img
          src={DiscordLogoSidebarHomeButton}
          alt=""
          className="w-[30px] h-[30px] text-white"
        />
        <SidebarDot
          isHover={isHovering}
          isSelected={isSelected}
          notification={false}
        />
      </div>
    </button>
  );
};

export default SidebarHomeButton;
