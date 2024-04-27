import React, { useEffect, useRef, useState } from "react";
import { Message, listenAndGetMessages } from "../../../firebase/firestore";
import { useParams } from "react-router-dom";
import DisplayChatMessageWithUserInfo from "./DisplayChatMessageWithUserInfo";
import DisplayChatMessage from "./DisplayChatMessage";
import DisplayDateInfo from "./DisplayDateInfo";
import { User } from "../../../types/user.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  isOlderThanOneDay,
  isOlderThanOneMinute,
} from "../../../utils/dateUtils";

interface DirectMessageChatProps {
  UserInfo: User;
}

const DirectMessageChat: React.FC<DirectMessageChatProps> = ({ UserInfo }) => {
  const { conversationID } = useParams();
  const [messages, setMessages] = useState<Message[]>();
  const user = useSelector((state: RootState) => state.user);
  const scrollTo = useRef<HTMLDivElement>(null);
  const [disableAutoScroll, setDisableAutoScroll] = useState(false);

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

  useEffect(() => {
    if (messages) {
      if (!disableAutoScroll && messages?.length > 0) {
        scrollTo.current?.scrollIntoView({ behavior: "smooth" });
        setDisableAutoScroll(true);
      }

      if (messages.at(messages.length - 1)?.sender === user.name) {
        scrollTo.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages]);

  return (
    <div>
      {messages?.map((message: Message, index: number, array: Message[]) => {
        if (!message) return null;
        if (index > 0) {
          if (
            //check for second message if its second message we dont render user profile
            message.sender === array[index - 1].sender &&
            isOlderThanOneMinute(message.timestamp - array[index - 1].timestamp)
          ) {
            return <DisplayChatMessage message={message} />;
          } else {
            return (
              <>
                {isOlderThanOneDay(
                  message.timestamp,
                  array[index - 1].timestamp
                ) ? (
                  <DisplayDateInfo timestamp={message.timestamp} />
                ) : null}
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
      <div ref={scrollTo}></div>
    </div>
  );
};

export default DirectMessageChat;
