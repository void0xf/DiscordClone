import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";
import { User } from "../types/user.t";
import { addUserDataToFireStore } from "./firestore";
import { getFirestore } from "firebase/firestore";

export async function createNewUser(
  email: string,
  password: string,
  userInfo: User
) {
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth(firebaseApp);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const res2 = await addUserDataToFireStore(db, res.user.uid, userInfo);
    if (res && res2) {
      return true;
    }
  } catch (error) {
    console.error("Registration error:", error);
  }
}

export async function loginUser(email: string, password: string) {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user.uid;
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
}

export async function logOutUser() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  try {
    signOut(auth);
    return true;
  } catch (error) {
    console.error("Error logging out:", error);
    return false;
  }
}
