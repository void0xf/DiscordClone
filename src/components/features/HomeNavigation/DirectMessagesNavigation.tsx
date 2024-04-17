import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getUsersFromUID } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import DirectMessage from "./DirectMessage";

const DirectMessagesNavigation = () => {
  const user = useSelector((state: RootState) => state.user);
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);

  async function getUsersFromDMs() {
    const res = await getUsersFromUID(user.DirectMessages as string[]);
    return res;
  }

  useEffect(() => {
    getUsersFromDMs().then((res) => {
      setUsersToDisplay(res as User[]);
    });
  }, [user.DirectMessages.length]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-4 text-xs font-ggSansMedium">
        <p className="text-TextGray">DIRECT MESSAGES</p>
        <button className="text-TextGray text-lg">
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
