import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { listenAndGetMessages, sendMessage } from "../../../firebase/firestore";
import { Message } from "../../../firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

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
    <div>
      {messages?.map((message) => (
        <div key={message.timestamp} className="flex gap-4">
          <span>{message.sender}</span>
          <p>{message.text}</p>
        </div>
      ))}

      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          handleSendMessage();
        }}
      >
        SendMessage
      </button>
    </div>
  );
};

export default DirectMessage;
