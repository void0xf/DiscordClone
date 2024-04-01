import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { listenAndGetMessages, sendMessage } from "../../../firebase/firestore";
import { Message } from "../../../firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
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
import DirectMessagesContainer from "./DirectMessagesContainer";
import DirectMessageStrangerInfo from "./DirectMessageStrangerInfo";
import DirectMessageChat from "./DirectMessageChat";

const DirectMessage = () => {
  const { conversationID } = useParams();
  const [messages, setMessages] = useState<Message[]>();
  const user = useSelector((state: RootState) => state.user);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!conversationID) return;
    const unsubscribe = listenAndGetMessages(conversationID, setMessages);
    return () => unsubscribe();
  }, [conversationID]);

  const handleSendMessage = () => {
    if (!inputRef.current?.value) return;
    const message: Message = {
      sender: user.name,
      text: inputRef.current?.value,
      timestamp: Date.now(),
    };
    if (!conversationID) return console.error("No conversationID");
    sendMessage(conversationID, message);
    inputRef.current.value = "";
  };

  return (
    <div className="h-full bg-LightGray">
      <TabTittleBar>
        <div className="flex justify-between items-center w-full mx-4">
          <div className="text-md ">
            <UserProfile UserData={user} />
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

      <DirectMessagesContainer>
        <DirectMessageStrangerInfo user={user} />
        <DirectMessageChat />
      </DirectMessagesContainer>
    </div>
  );
};

export default DirectMessage;
