import React from "react";
import { Message } from "../../../firebase/firestore";
import { User } from "../../../types/user.t";

interface DisplayChatMessageWithUserInfoProps {
  message: Message;
  UserInfo: User;
}

const formatDate = (timestamp: number): string => {
  // Convert timestamp to milliseconds
  // Create a new Date object from milliseconds
  const dateObject = new Date(timestamp);

  // Extract day, month, year, hours, and minutes
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; // Months are zero based, so add 1
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  // Pad single digits with leading zeros
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Construct formatted date string
  const formattedDate = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;

  return formattedDate;
};
const DisplayChatMessageWithUserInfo: React.FC<
  DisplayChatMessageWithUserInfoProps
> = ({ message, UserInfo }) => {
  return (
    <div>
      {UserInfo ? (
        <div className="flex gap-2 items-center px-2">
          <div>
            <img
              src={`${UserInfo.profilePicture}`}
              alt=""
              height={40}
              width={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-whiteMain font-ggSansMedium text-xl flex items-baseline">
              <p>{UserInfo.nickName}</p>
              <p className="text-gray-400 font-ggsansNormal text-sm items-baseline pl-2">
                {formatDate(message.timestamp)}
              </p>
            </div>
            <div className="text-gray-200 font-ggsansNormal">
              {message.text}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DisplayChatMessageWithUserInfo;
