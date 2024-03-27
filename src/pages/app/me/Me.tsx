import Sidebar from "../../../components/common/Sidebar/Sidebar";
import { ServerPreview } from "../../../types/user.t";
import ExampleServerIcon from "../../../assets/icons/Sidebar/ExampleServerIcon.svg";
import Navigation from "../../../components/features/HomeNavigation/Navigation";
import Friends from "../../../components/features/Friends/Friends";
import DisplayFriends from "../../../components/features/Friends/DisplayFriends";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Me = () => {
  const dummyServers: ServerPreview[] = [
    { name: "Test", SvgIcon: ExampleServerIcon },
  ];
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      {user.id === "Guest" ? (
        <div>
          <p>You are not logged in</p>
        </div>
      ) : (
        <div className="flex">
          <section className="h-screen">
            <Sidebar servers={dummyServers} />
          </section>
          <section className="h-screen">
            <Navigation />
          </section>
          <section className="h-screen w-full flex flex-auto flex-col border-l-[1px] border-notQuiteBlack">
            <Friends />
            <DisplayFriends type="" />
          </section>
        </div>
      )}
    </div>
  );
};

export default Me;
