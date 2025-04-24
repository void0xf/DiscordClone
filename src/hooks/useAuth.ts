"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetUser } from "../slices/userSlice";

/**
 * Hook to handle auth-related actions on the client side
 */
export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = () => {
    if (typeof document !== "undefined") {
      return (
        document.cookie.includes("auth-token=") ||
        document.cookie.includes("firebaseToken=") ||
        document.cookie.includes("isLoggedIn=true") ||
        document.cookie.includes("session=")
      );
    }
    return false;
  };

  const logout = async () => {
    const { logOutUser } = await import("../firebase/auth");

    const success = await logOutUser();
    if (success) {
      dispatch(resetUser());

      window.location.href = "/login";
    }

    return success;
  };

  return {
    isAuthenticated,
    logout,
  };
}
