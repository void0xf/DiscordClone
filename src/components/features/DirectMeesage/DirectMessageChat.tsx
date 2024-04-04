import React, { useEffect, useState } from "react";
import { Message, listenAndGetMessages } from "../../../firebase/firestore";
import { useParams } from "react-router-dom";
import DisplayChatMessageWithUserInfo from "./DisplayChatMessageWithUserInfo";
import DisplayChatMessage from "./DisplayChatMessage";
import DisplayDateInfo from "./DisplayDateInfo";
import { User } from "../../../types/user.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

function isOlderThanOneMinute(timestamp: number) {
  // Convert timestamp to milliseconds
  const timestampMilliseconds = timestamp;

  // Get current time in milliseconds
  const currentTimeMilliseconds = new Date().getTime();

  // Calculate difference in milliseconds
  const differenceMilliseconds =
    currentTimeMilliseconds - timestampMilliseconds;

  // Check if difference is greater than one minute (60,000 milliseconds)
  return differenceMilliseconds > 60000;
}

// function isOlderThanOneDay(timestamp: number) {
//   // Convert timestamp to milliseconds
//   const timestampMilliseconds = timestamp;

//   // Get current time in milliseconds
//   const currentTimeMilliseconds = new Date().getTime();

//   // Calculate difference in milliseconds
//   const differenceMilliseconds =
//     currentTimeMilliseconds - timestampMilliseconds;

//   // Check if difference is greater than one minute (60,000 milliseconds)
//   return differenceMilliseconds > 60000 * 60 * 24;
// }
interface DirectMessageChatProps {
  UserInfo: User;
}

const DirectMessageChat: React.FC<DirectMessageChatProps> = ({ UserInfo }) => {
  const { conversationID } = useParams();
  const [messages, setMessages] = useState<Message[]>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (conversationID === undefined) return;
    const unSubscribeFromListening = listenAndGetMessages(
      conversationID,
      (fetchedMessages: Message[]) => {
        setMessages(fetchedMessages);
      }
    );

    return () => {
      unSubscribeFromListening();
    };
  }, [conversationID]);

  return (
    <div>
      {messages?.map((message: Message, index: number, array: Message[]) => {
        if (!message) return null;
        if (index > 0) {
          if (
            message.sender === array[index - 1].sender &&
            isOlderThanOneMinute(message.timestamp - array[index - 1].timestamp)
          ) {
            return <DisplayChatMessage message={message} />;
          } else {
            return (
              <>
                {/* <DisplayDateInfo timestamp={message.timestamp} /> */}
                <div className="">
                  <DisplayChatMessageWithUserInfo
                    message={message}
                    UserInfo={message.sender == user.name ? user : UserInfo}
                  />
                </div>
              </>
            );
          }
        }
        return (
          <>
            <DisplayDateInfo timestamp={message.timestamp} />
            <DisplayChatMessageWithUserInfo
              message={message}
              UserInfo={message.sender == user.name ? user : UserInfo}
            />
          </>
        );
      })}
    </div>
  );
};

export default DirectMessageChat;
