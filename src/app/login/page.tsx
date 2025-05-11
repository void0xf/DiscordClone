import React from "react";
import Login from "@/components/features/auth/login/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Discord Clone account",
};

const Page = () => {
  return <Login />;
};

export default Page;
