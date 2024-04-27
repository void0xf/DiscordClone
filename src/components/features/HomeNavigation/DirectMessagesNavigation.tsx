import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getUsersFromUID } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import DirectMessage from "./DirectMessage";
import { useNavigate } from "react-router-dom";

const DirectMessagesNavigation = () => {
  const user = useSelector((state: RootState) => state.user);
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);
  const [directMessagesLength, setDirectMessagesLength] = useState(
    user.DirectMessages.length
  );

  const nav = useNavigate();
  async function getUsersFromDMs() {
    const res = await getUsersFromUID(user.DirectMessages as string[]);
    return res;
  }

  useEffect(() => {
    getUsersFromDMs().then((res) => {
      setUsersToDisplay(res as User[]);
    });
    //incase when user will remove someone from friends
    if (directMessagesLength >= user.DirectMessages.length) {
      nav("/channels/@me");
      setDirectMessagesLength(user.DirectMessages.length);
    }
  }, [user.DirectMessages.length]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-4 text-xs font-ggSansMedium pt-2">
        <p className="text-TextGray text-[0.75rem] leading-5 font-display font-ggSansSemiBold tracking-[0.02rem]">
          DIRECT MESSAGES
        </p>
        <button className="text-TextGray text-lg font-extrabold">
          <GoPlus />
        </button>
      </div>

      <div className="text-TextGray">
        {usersToDisplay.map((user) => {
          return (
            <div className="px-2 ">
              <DirectMessage UserInfo={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DirectMessagesNavigation;
