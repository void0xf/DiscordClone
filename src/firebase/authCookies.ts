import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
import Cookies from "js-cookie";
/**
 * A utility function to sync Firebase Auth state with cookies
 * This is necessary because Next.js middleware can only access cookies, not localStorage
 */
export function initAuthStateCookieSync() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const token = await user.getIdToken();

        Cookies.set("firebaseToken", token, {
          expires: 7, // 7 days
          path: "/",
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });

        Cookies.set("isLoggedIn", "true", {
          expires: 7,
          path: "/",
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });
      } catch (error) {
        console.error("Error setting auth cookies:", error);
      }
    } else {
      Cookies.remove("firebaseToken");
      Cookies.remove("isLoggedIn");
    }
  });
}

/**
 * Call this function when user logs in to immediately set cookies
 */
export async function setAuthCookies(user: User) {
  if (user) {
    try {
      const token = await user.getIdToken();
      Cookies.set("firebaseToken", token, {
        expires: 7,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      Cookies.set("isLoggedIn", "true", {
        expires: 7,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return true;
    } catch (error) {
      console.error("Error setting auth cookies on login:", error);
      return false;
    }
  }
  return false;
}

/**
 * Call this function when user logs out to clear cookies
 */
export function clearAuthCookies() {
  Cookies.remove("firebaseToken");
  Cookies.remove("isLoggedIn");
  Cookies.remove("session");
}
