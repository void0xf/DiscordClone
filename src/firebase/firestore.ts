import { Firestore, collection, doc, setDoc } from "firebase/firestore";
import { User } from "../types/user.t";

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
