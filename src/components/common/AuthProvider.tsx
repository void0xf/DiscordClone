"use client";

import { useEffect } from "react";
import { initAuthStateCookieSync } from "@/firebase/authCookies";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAuthStateCookieSync();
  }, []);

  return <>{children}</>;
} 