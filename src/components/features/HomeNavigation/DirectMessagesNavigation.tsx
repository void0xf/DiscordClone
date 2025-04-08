"use client";

import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  getStrangerInfoFromConversation,
  getUsersFromUID,
} from "@/src/firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import DirectMessage from "./DirectMessage";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const DirectMessagesNavigation = () => {
  const router = useRouter();
  const conversationID = useParams().id;
  const user = useSelector((state: RootState) => state.user);
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);
  const [fetchedStranger, setFetchedStanger] = useState<User | null>(null);
  const [directMessagesLength, setDirectMessagesLength] = useState(
    user.DirectMessages.length
  );
  async function getUsersFromDMs() {
    const res = await getUsersFromUID(user.DirectMessages as string[]);
    return res;
  }

  useEffect(() => {
    getUsersFromDMs().then((res) => {
      setUsersToDisplay(res as User[]);
    });
    //incase when user will remove someone from friends mid dm
    if (directMessagesLength > user.DirectMessages.length) {
      setDirectMessagesLength(user.DirectMessages.length);
      router.push("/channels/@me");
    }
  }, [user.DirectMessages.length, user.friends.length]);

  useEffect(() => {
    async function fetchUser() {
      if (conversationID) {
        const user = await getStrangerInfoFromConversation(
          conversationID as string
        );
        setFetchedStanger(user as User);
      } else {
        setFetchedStanger(null);
      }
    }
    fetchUser();
  }, [conversationID]);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between px-4 text-xs font-ggSansMedium pt-2">
        <p className="text-TextGray text-[0.75rem] leading-5 font-display font-ggSansSemiBold tracking-[0.02rem]">
          DIRECT MESSAGES
        </p>
        <button className="text-TextGray text-lg font-extrabold">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="text-TextGray">
        {usersToDisplay.map((user) => {
          if (fetchedStranger) {
            return (
              <div className={`px-2`}>
                <DirectMessage
                  UserInfo={user}
                  isActive={fetchedStranger.name === user.name}
                />
              </div>
            );
          } else {
            return (
              <div className={`px-2`}>
                <DirectMessage UserInfo={user} isActive={false} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default DirectMessagesNavigation;
