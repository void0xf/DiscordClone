import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useParams } from "react-router-dom";
import { getUsersFromUID } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../../../types/user.t";
import DirectMessage from "./DirectMessage";

const DirectMessagesNavigation = () => {
  const user = useSelector((state: RootState) => state.user);
  const { conversationID } = useParams();
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);

  useEffect(() => {
    if (!conversationID) return;
    getUsersFromUID(user.DirectMessages as string[]).then((result) => {
      setUsersToDisplay(result as User[]);
    });
  }, [conversationID]);

  return (
    <div>
      <div className="flex justify-between px-4 text-xs font-ggSansMedium">
        <p className="text-TextGray">DIRECT MESSAGES</p>
        <button className="text-TextGray text-lg">
          <GoPlus />
        </button>
      </div>

      <div className="text-TextGray">
        {usersToDisplay.map((user) => {
          return (
            <div>
              <DirectMessage UserInfo={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DirectMessagesNavigation;
