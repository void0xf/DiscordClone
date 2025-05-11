import Register from "@/components/features/auth/register/Register";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new Discord Clone account",
};

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
