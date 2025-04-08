"use client";

import { useEffect, useState } from "react";
import {
  Message,
  getStrangerInfoFromConversation,
  sendMessage,
} from "@/src/firebase/firestore";
import TabTittleBar from "../../common/TabTitle/TabTittleBar";
import UserProfile from "../../common/UserProfile";
import { Camera, Pin, UserPlus } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import SearchForm from "../../common/SearchForm";
import { Inbox } from "lucide-react";
import { HelpCircle } from "lucide-react";
import DirectMessageStrangerInfo from "./DirectMessageStrangerInfo";
import DirectMessageChat from "./DirectMessageChat";
import DirectMessageChatInput from "./DirectMessageChatInput";
import { User } from "../../../types/user.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import MessageLoadingScreen from "../../common/MessageLoadingScreen";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/src/firebase/FirebaseConfig";
import { useParams } from "next/navigation";

const DirectMessage = () => {
  initializeApp(firebaseConfig);
  const conversationID = useParams().id;
  const [strangerInfo, setStrangerInfo] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  const myUser = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function setStrangerInfoFromConversation(conversationID: string) {
      const fetchedStranger =
        await getStrangerInfoFromConversation(conversationID);
      if (fetchedStranger) {
        setStrangerInfo(fetchedStranger as User);
        setIsLoading(false);
      }
    }

    setStrangerInfoFromConversation(conversationID as string);
  }, [conversationID]);

  const handleSendMessage = (message: string) => {
    if (!strangerInfo) return console.error("No strangerInfo");
    const messageObj: Message = {
      sender: myUser.name,
      text: message,
      timestamp: Date.now(),
    };
    if (!conversationID) return console.error("No conversationID");
    sendMessage(conversationID as string, messageObj);
  };

  return (
    <div className="h-full bg-LightGray grid grid-rows-[1fr_auto] min-h-screen ">
      <TabTittleBar>
        <div className="flex justify-between items-center w-full mx-4">
          <div className="text-md ">
            {strangerInfo && (
              <UserProfile
                UserData={strangerInfo as User}
                showNameOnHover={false}
                showOnlineStatus={false}
                additionalInfo=""
              />
            )}
          </div>
          <div className="text-gray-400 flex text-2xl gap-4">
            <PhoneCall />
            <Camera />
            <Pin />
            <UserPlus />
            <CircleUserRound strokeWidth={2} />
            <div className="h-6 text-sm">
              <SearchForm />
            </div>
            <Inbox />
            <HelpCircle />
          </div>
        </div>
      </TabTittleBar>
      {strangerInfo && !isLoading ? (
        <>
          <div className="flex-1 overflow-y-auto flex-grow px-4 scrollbar-chat scrollbar-webkit -webkit-scrollbar-track webkit-scrollbar-track webkit-scrollbar-thumb">
            <DirectMessageStrangerInfo user={strangerInfo as User} />
            <DirectMessageChat UserInfo={strangerInfo} />
          </div>

          <div className="h-12 px-4 pb-4 mt-4">
            <DirectMessageChatInput
              strangerUserName={strangerInfo.nickName}
              onSendMessage={(mess) => {
                handleSendMessage(mess);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto flex-grow px-4 scrollbar-chat scrollbar-webkit -webkit-scrollbar-track webkit-scrollbar-track webkit-scrollbar-thumb">
            <MessageLoadingScreen />
          </div>
          <div className="h-12 px-4 pb-4">
            <DirectMessageChatInput
              strangerUserName={"message"}
              onSendMessage={(mess) => {
                handleSendMessage(mess);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DirectMessage;
