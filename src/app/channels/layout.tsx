"use client";

import {
  listenForIncomingFriendRequests,
  syncStateFromFirestore,
} from "@/firebase/firestore";
import { ServerPreview } from "@/types/user.t";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import ExampleServerIcon from "@/assets/icons/Sidebar/ExampleServerIcon.svg";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import Navigation from "@/components/features/HomeNavigation/Navigation";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase/FirebaseConfig";

async function onFriendRequest(dispatch: Dispatch<UnknownAction>) {
  syncStateFromFirestore(dispatch);
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  initializeApp(firebaseConfig);
  const dummyServers: ServerPreview[] = [
    { name: "Test", SvgIcon: ExampleServerIcon },
    { name: "Hi" },
    { name: "Test app My app ok?" },
  ];

  // const user = useSelector((state: RootState) => state.user);
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
    <div className="flex h-screen overflow-hidden">
      <section className="h-full max-h-screen">
        <Sidebar servers={dummyServers} />
      </section>
      <section className="h-full max-h-screen">
        <Navigation />
      </section>
      <section className="max-h-screen w-full flex flex-auto flex-col border-l-[1px] border-notQuiteBlack">
        {children}
      </section>
    </div>
  );
};

export default Layout;
