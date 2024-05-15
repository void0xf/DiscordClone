import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Message,
  getStrangerInfoFromConversation,
  sendMessage,
} from "../../../pages/firebase/firestore";
import TabTittleBar from "../../common/TabTitle/TabTittleBar";
import UserProfile from "../../common/UserProfile";
import {
  BsFillCameraVideoFill,
  BsFillPinAngleFill,
  BsPersonFillAdd,
} from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { CircleUserRound } from "lucide-react";
import SearchForm from "../../common/SearchForm";
import { RiInbox2Fill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";
import DirectMessageStrangerInfo from "./DirectMessageStrangerInfo";
import DirectMessageChat from "./DirectMessageChat";
import DirectMessageChatInput from "./DirectMessageChatInput";
import { User } from "../../../types/user.t";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import MessageLoadingScreen from "../../common/MessageLoadingScreen";

const DirectMessage = () => {
  const { conversationID } = useParams();
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
    sendMessage(conversationID, messageObj);
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
            <PiPhoneCallFill />
            <BsFillCameraVideoFill />
            <BsFillPinAngleFill />
            <BsPersonFillAdd />
            <CircleUserRound strokeWidth={2} />
            <div className="h-6 text-sm">
              <SearchForm />
            </div>
            <RiInbox2Fill />
            <BiSolidHelpCircle />
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
