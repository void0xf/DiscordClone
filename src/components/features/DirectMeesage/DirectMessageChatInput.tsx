"use client";

import { CirclePlus } from "lucide-react";
import { Gift } from "lucide-react";
import { Image } from "lucide-react";
import { Sticker } from "lucide-react";
import { Smile } from "lucide-react";
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
        <CirclePlus />
      </div>
      <div className="flex gap-3 absolute right-1 top-1 text-gray-300 text-2xl">
        <Gift className="hover:text-gray-100" />
        <Smile className="hover:text-gray-100" />
        <Sticker className="hover:text-gray-100" />
        <Image className="hover:text-gray-100" />
      </div>
    </div>
  );
};

export default DirectMessageChatInput;
