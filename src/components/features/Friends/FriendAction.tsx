import React, { MouseEvent, useRef, useState } from "react";
import { User } from "../../../types/user.t";
import {
  removeFromFriends,
  syncStateFromFirestore,
} from "../../../pages/firebase/firestore";
import { useDispatch } from "react-redux";
import useOutsideClick from "../../../hooks/useOutsideClick";

interface FriendActionProps {
  icon: JSX.Element;
  onClickHandler: (() => Promise<void>) | (() => void);
  label: string;
  hoverColor: "accept" | "decline" | "default";
  showContextMenu?: boolean;
  user?: User;
}

const FriendAction: React.FC<FriendActionProps> = ({
  icon,
  onClickHandler,
  label,
  hoverColor,
  showContextMenu,
  user,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showContextMenuAfterClick, setShowContextMenuAfterClick] =
    useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleRemoveFriend = async () => {
    if (!user) return;
    removeFromFriends(user.name);
    syncStateFromFirestore(dispatch);
  };

  useOutsideClick(dropDownRef, () => {
    setShowContextMenuAfterClick(false);
  });

  return (
    <div
      ref={dropDownRef}
      className={`bg-FriendActionIconBackground w-9 h-9  text-TextGraytext text-2xl rounded-full ${
        hoverColor == "accept"
          ? "hover:text-SidebarUltityIcon"
          : hoverColor == "decline"
            ? "hover:text-red-500"
            : null
      } cursor-pointer relative flex items-center justify-center`}
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        if (!showContextMenu) {
          onClickHandler();
        }
        setShowContextMenuAfterClick(!showContextMenuAfterClick);
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {icon}
      {isHovering && !showContextMenuAfterClick && (
        <div
          className="absolute bg-black text-white text-sm p-2 rounded-md
        translate-x-0 -translate-y-10 transition-opacity duration-1000 "
        >
          {label}
        </div>
      )}

      {showContextMenuAfterClick && showContextMenu && (
        <div
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            handleRemoveFriend();
          }}
          className="absolute bg-black text-white text-sm p-2 rounded-md
        -translate-x-14 translate-y-6 w-42 text-nowrap"
        >
          <p className="text-red-500">Remove Friend</p>
        </div>
      )}
    </div>
  );
};

export default FriendAction;
