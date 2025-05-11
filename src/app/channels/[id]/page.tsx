import DirectMessage from "@/components/features/DirectMeesage/DirectMessage";
import Friends from "@/components/features/Friends/Friends";
import { firebaseConfig } from "@/firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";
import React from "react";
import type { Metadata } from "next";

// Generate dynamic metadata based on the channel ID
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const title = params.id === "%40me" 
    ? "Friends" 
    : `Channel`;
  
  return {
    title,
    description: params.id === "%40me" 
      ? "View and manage your Discord friends" 
      : `Chat in channel #${params.id}`,
  };
}

const MePage = ({ params }: { params: { id: string } }) => {
  initializeApp(firebaseConfig);

  if (params.id === "%40me") return <Friends />;
  return <DirectMessage />;
};

export default MePage;
