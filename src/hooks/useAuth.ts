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

  // Check if auth token cookie exists
  const isAuthenticated = () => {
    if (typeof document !== "undefined") {
      return document.cookie.includes("auth-token=");
    }
    return false;
  };

  // Logout function that removes cookie and resets state
  const logout = async () => {
    // Import dynamically to avoid server-side issues
    const { logOutUser } = await import("../firebase/auth");
    
    const success = await logOutUser();
    if (success) {
      // Reset user state in Redux
      dispatch(resetUser());
      router.push("/login");
    }
    
    return success;
  };

  return {
    isAuthenticated,
    logout
  };
} 