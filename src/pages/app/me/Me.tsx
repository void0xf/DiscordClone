import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Sidebar from "../../../components/common/Sidebar/Sidebar";
import Navigation from "../../../components/features/HomeNavigation/Navigation";
import { ServerPreview } from "../../../types/user.t";
import ExampleServerIcon from "../../../assets/icons/Sidebar/ExampleServerIcon.svg";
import { Outlet } from "react-router-dom"; // Import Outlet

const Me = () => {
  const dummyServers: ServerPreview[] = [
    { name: "Test", SvgIcon: ExampleServerIcon },
    { name: "Hi" },
    { name: "Test app My app ok?" },
  ];
  const user = useSelector((state: RootState) => state.user);

  if (user.id === "Guest") {
    return <p>You are not logged in</p>;
  }

  return (
    <div className="flex h-screen">
      <section className="h-full">
        <Sidebar servers={dummyServers} />
      </section>
      <section className="h-full">
        <Navigation />
      </section>
      <section className="max-h-full w-full flex flex-auto flex-col border-l-[1px] border-notQuiteBlack">
        <Outlet />
      </section>
    </div>
  );
};

export default Me;
