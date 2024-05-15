import DirectMessage from "@/src/components/features/DirectMeesage/DirectMessage";
import Friends from "@/src/components/features/Friends/Friends";
import { firebaseConfig } from "@/src/firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";
import React from "react";

const MePage = ({ params }: { params: { id: string } }) => {
  initializeApp(firebaseConfig);

  if (params.id === "%40me") return <Friends />;
  return <DirectMessage />;
};

export default MePage;
