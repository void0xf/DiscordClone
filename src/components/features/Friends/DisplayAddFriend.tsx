import AddFriendInput from "./AddFriendInput";
import ExploreDisoverableServers from "./ExploreDisoverableServers";

const DisplayAddFriend = () => {
  return (
    <div className="font-ggsansNormalbg-LightGray h-full bg-LightGray">
      <div className="mx-6 flex gap-2 flex-col pt-4">
        <h2 className="text-whiteMain font-ggSansMedium">ADD FRIEND</h2>
        <p className="text-sm">
          You can add friends with their Discord usernames
        </p>
        <AddFriendInput />
      </div>
      <div className="w-full h-[2px] bg-SelectedUserTab my-4"></div>
      <div className="mx-6">
        <h2 className="text-whiteMain font-ggSansMedium">
          OTHER PLACES TO MAKE FRIENDS
        </h2>
        <div className="my-4">
          <ExploreDisoverableServers />
        </div>
      </div>
      <div></div>
      <div className="divWithSVGBackgroundAddFriendsTab h-52"></div>
      <p className="text-center pt-6">
        Wumpus is waiting on friends. You don't have to, though!
      </p>
    </div>
  );
};

export default DisplayAddFriend;
