import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";
import { addUserDataToFireStore } from "./firestore";
import { User } from "../types/user.t";
import { clearAuthCookies } from "./authCookies";

export async function createNewUser(
  email: string,
  password: string,
  userInfo: User
) {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const res2 = await addUserDataToFireStore(res.user.uid, userInfo);
    if (res && res2) {
      return true;
    }
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user.uid;
}

export async function logOutUser() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  try {
    await signOut(auth);
    clearAuthCookies();
    return true;
  } catch (error) {
    console.error("Error logging out:", error);
    return false;
  }
}
