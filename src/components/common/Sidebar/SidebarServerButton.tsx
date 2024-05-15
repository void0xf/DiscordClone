"use client";
import React, { useEffect, useState } from "react";
import { getServerPreviewName } from "../../../utils/getServerPreviewName";
import SidebarDot from "./SidebarDot";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setSidebarCurrentButton } from "../../../slices/sidebarSlice";
import Image from "next/image";

interface SidebarServerButtonProps {
  onClickHandler: () => void;
  icon?: string;
  text: string;
}

const SidebarServerButton: React.FC<SidebarServerButtonProps> = ({
  onClickHandler,
  icon,
  text,
}) => {
  const [doAnimation, setDoAnimation] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sidebarState = useSelector((state: RootState) => state.sidebar);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(sidebarState === text);
  }, [sidebarState]);
  const dispatch = useDispatch();

  const handleAnimation = () => {
    setDoAnimation(true);
    setTimeout(() => {
      setDoAnimation(false);
    }, 100);
  };

  const handleOnClick = () => {
    handleAnimation();
    onClickHandler();
    dispatch(setSidebarCurrentButton(text));
  };

  return (
    <div
      onClick={handleOnClick}
      className={`relative transition-all duration-75 cursor-pointer ${
        doAnimation ? "translate-y-0.5" : "translate-y-0"
      }
      `}
    >
      <div
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        className={`w-12 h-12 mx-auto my-1 text-center flex justify-center items-center transition-colors duration-800 ease-linear hover:rounded-2xl
                    ${
                      icon
                        ? ""
                        : "bg-SidebarServerWithoutIcon hover:bg-lightBlue"
                    }
                    ${isSelected ? "bg-lightBlue rounded-2xl" : "rounded-full"}
                    `}
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {icon ? (
          <Image src={icon} alt="" className="w-6 h-6" />
        ) : (
          <p className="text-whiteMain font-ggSansMedium">
            {getServerPreviewName(text)}
          </p>
        )}
        <SidebarDot
          isHover={isHovering}
          isSelected={isSelected}
          notification={false}
        />
      </div>
    </div>
  );
};

export default SidebarServerButton;
