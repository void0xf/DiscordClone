import React from "react";
import { User } from "../../../types/user.t";
import DirectMessageStrangerInfoButton from "./DirectMessageStrangerInfoButton";
import { removeFromFriends } from "../../../pages/firebase/firestore";

interface DirectMessageStrangerInfoProps {
  user: User;
}

const DirectMessageStrangerInfo: React.FC<DirectMessageStrangerInfoProps> = ({
  user,
}) => {
  return (
    <div className="bg-LightGray">
      <div className="flex flex-col text-start gap-4 pt-4">
        <div>
          <img
            src={user.profilePicture}
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="text-whiteMain">
          <h2 className="font-ggSansBold text-3xl mb-2">{user.nickName}</h2>
          <p className="text-xl mb-2">{user.name}</p>
        </div>
      </div>
      <div className="flex">
        <p className="font-ggsansNormal text-gray-400 mb-1">
          This is the beginning of your direct message history with &nbsp;
        </p>
        <p className="font-ggSansBold text-gray-300">{user.nickName}.</p>
      </div>
      <div className="flex items-center text-gray-300">
        <p className="text-sm text-gray-400">0 Mutual Servers</p>
        <div className="h-1 w-1 rounded-full bg-gray-600 mx-4"></div>
        <div className="flex gap-2">
          <DirectMessageStrangerInfoButton
            label="Remove Friend"
            onClick={() => {
              removeFromFriends(user.name);
            }}
          />
          <DirectMessageStrangerInfoButton label="Block" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default DirectMessageStrangerInfo;
