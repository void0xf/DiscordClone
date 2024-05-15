"use client";

import { FaCirclePlus } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { PiGifFill } from "react-icons/pi";
import { LuSticker } from "react-icons/lu";
import { MdEmojiEmotions } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

interface DirectMessageChatInputProps {
  strangerUserName: string;
  onSendMessage: (message: string) => void;
}

const DirectMessageChatInput: React.FC<DirectMessageChatInputProps> = ({
  strangerUserName,
  onSendMessage,
}) => {
  const [message, setMessage] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "enter" &&
        message.trim() !== "" &&
        isFocused
      ) {
        onSendMessage(message);
        setMessage("");
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [message, isFocused, onSendMessage]);

  const handleInput = () => {
    if (inputRef.current) {
      setMessage(inputRef.current.value);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="outline-none text-darkWhite w-full px-12 pr-40 py-2 rounded-md bg-MessageInputBackground"
        placeholder={`Message @${strangerUserName}`}
        onChange={handleInput}
        value={message}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      <div className="text-gray-300 text-2xl absolute top-2 translate-x-3">
        <FaCirclePlus />
      </div>
      <div className="flex gap-3 absolute right-1 top-1 text-gray-300 text-2xl">
        <FaGift className="hover:text-gray-100" />
        <PiGifFill className="hover:text-gray-100" />
        <LuSticker className="hover:text-gray-100" />
        <MdEmojiEmotions className="hover:text-gray-100" />
      </div>
    </div>
  );
};

export default DirectMessageChatInput;
