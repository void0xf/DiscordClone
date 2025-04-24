"use client";

import React, { useEffect, useState } from "react";
import {
  addFriend,
  getUIDfromName,
  syncStateFromFirestore,
} from "@/firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import FormButton from "../../common/AuthPage/FormButton";

const AddFriendInput = () => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleAddFriend = async () => {
    const uid = await getUIDfromName(input);
    if (uid === null) {
      setError("Hm that didn't work. Double-check the username and try again");
      return;
    }
    if (user.friends.includes(uid)) {
      setError(`${input} is already your friend`);
      return;
    }
    if (user.name === input) {
      setError("You can't add yourself as a friend");
      return;
    }
    setSuccess(`Success! Your Friend request to ${input} was sent`);
    await addFriend(input as string);
    await syncStateFromFirestore(dispatch);
  };
  useEffect(() => {
    setError("");
    setSuccess("");
  }, [input]);

  return (
    <div className="relative flex flex-col">
      <input
        type="text"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        className={`bg-SidebarBackground text-white w-full py-3 px-4 rounded-md outline-none placeholder-TextGray
        focus:outline-blue-400
        ${error !== "" ? "border-red-500 border-[1px]" : ""}
        ${success !== "" ? "border-SidebarUltityIcon border-[1px]" : ""}
        `}
        placeholder="You can add friends with their Discord usernames."
        autoFocus={true}
      />
      <div className="absolute w-1/6 top-0 right-0 -translate-x-4 text-sm h-14 flex -translate-y-4 whitespace-nowrap overflow-hidden text-ellipsis">
        <FormButton
          label="Send Friend Request"
          onClickHandler={handleAddFriend}
          activeBoolean={true}
        />
      </div>
      <p className="text-red-400 text-sm mt-2 font-ggsansNormal">{error}</p>
      <p className="text-SidebarUltityIcon text-sm mt-1 font-ggsansNormal">
        {success}
      </p>
    </div>
  );
};

export default AddFriendInput;
