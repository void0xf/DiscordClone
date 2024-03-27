import {
  Firestore,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { User } from "../types/user.t";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export async function addUserDataToFireStore(
  firestore: Firestore,
  uid: string,
  userInfo: User
) {
  const userCollectionRef = collection(firestore, "users");
  const userDocRef = doc(userCollectionRef, uid);
  try {
    await setDoc(userDocRef, userInfo);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getCurrentUserUID() {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User's UID:", user.uid);
    }
    () => unsubscribe();
    return user?.uid;
  });
  return "";
}

export async function getUserStateFromFirestore(uid: string) {
  try {
    const firestore = getFirestore();
    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as User;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Error getting document:");
  }
}
