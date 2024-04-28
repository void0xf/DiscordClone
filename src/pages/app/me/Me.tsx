import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Sidebar from "../../../components/common/Sidebar/Sidebar";
import Navigation from "../../../components/features/HomeNavigation/Navigation";
import { ServerPreview } from "../../../types/user.t";
import ExampleServerIcon from "../../../assets/icons/Sidebar/ExampleServerIcon.svg";
import { Outlet } from "react-router-dom"; // Import Outlet
import { useEffect } from "react";
import {
  listenForIncomingFriendRequests,
  syncStateFromFirestore,
} from "../../../firebase/firestore";
import { Dispatch, UnknownAction } from "redux";

async function onFriendRequest(dispatch: Dispatch<UnknownAction>) {
  syncStateFromFirestore(dispatch);
}

const Me = () => {
  const dummyServers: ServerPreview[] = [
    { name: "Test", SvgIcon: ExampleServerIcon },
    { name: "Hi" },
    { name: "Test app My app ok?" },
  ];
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let requestUnsubscribe: () => void;
    const setupIncomingRequests = async () => {
      requestUnsubscribe = await listenForIncomingFriendRequests(() => {
        onFriendRequest(dispatch);
      });
    };
    setupIncomingRequests();
    return () => {
      if (requestUnsubscribe) {
        requestUnsubscribe();
      }
    };
  }, []);

  return (
    <>
      {user.id === "Guest" ? (
        <p>You are not logged in</p>
      ) : (
        <div className="flex h-screen overflow-hidden">
          <section className="h-full max-h-screen">
            <Sidebar servers={dummyServers} />
          </section>
          <section className="h-full max-h-screen">
            <Navigation />
          </section>
          <section className="max-h-screen w-full flex flex-auto flex-col border-l-[1px] border-notQuiteBlack">
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};

export default Me;
