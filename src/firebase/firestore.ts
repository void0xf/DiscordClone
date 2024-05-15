import {
  DocumentSnapshot,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { User, UserStatus } from "@/src/types/user.t";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "@/src/slices/userSlice";
import { Dispatch, UnknownAction } from "redux";

export async function addUserDataToFireStore(uid: string, userInfo: User) {
  const firestore = getFirestore();
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
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
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

export async function getUIDfromName(name: string) {
  const firestore = getFirestore();
  const collectionRef = collection(firestore, "users");

  const q = query(collectionRef, where("name", "==", name));

  try {
    const querySnapshot = await getDocs(q);
    for (const doc of querySnapshot.docs) {
      const uid = doc.id;
      return uid;
    }
    return null;
  } catch (error) {
    console.error("Error searching for name:", error);
    throw new Error("Error searching for name");
  }
}

export async function addFriend(name: string) {
  const myuid = await getCurrentUserUID();
  const firestore = getFirestore();
  const targetUID = await getUIDfromName(name);

  if (targetUID !== null && myuid !== "") {
    const targetRef = doc(firestore, "users", targetUID);
    const userRef = doc(firestore, "users", myuid as string);
    try {
      await updateDoc(targetRef, {
        incomingFriendRequests: arrayUnion(myuid),
      });
      await updateDoc(userRef, {
        outgoingFriendRequests: arrayUnion(targetUID),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export async function listenForIncomingFriendRequests(callback: () => void) {
  const db = getFirestore();
  const userId = (await getCurrentUserUID()) as string;
  const userDocRef = doc(db, "users", userId);

  const unsubscribe = onSnapshot(
    userDocRef,
    (docSnapshot: DocumentSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        const incomingFriendRequests = userData.incomingFriendRequests;
        if (incomingFriendRequests) {
          console.log("You have new friend requests:", incomingFriendRequests);
          callback();
        } else {
          console.log("No incoming friend requests");
        }
      } else {
        console.log("User document does not exist");
      }
    },
    (error) => {
      console.error("Error listening to incoming friend requests:", error);
    }
  );

  return unsubscribe;
}

export function listenToUserStatuses(
  userIds: string[],
  onStatusChange: () => void
) {
  const db = getFirestore();

  type NoArgFunction = () => void;
  const unsubscribeFunctions: NoArgFunction[] = [];

  userIds.forEach((userId) => {
    const userDocRef = doc(db, "users", userId);

    const unsubscribe = onSnapshot(
      userDocRef,
      (doc) => {
        if (doc.exists()) {
          onStatusChange();
        }
      },
      (error) => {
        console.error(
          `Error listening to user status for userID ${userId}:`,
          error
        );
      }
    );

    unsubscribeFunctions.push(unsubscribe);
  });

  return () => {
    unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
  };
}
export async function acceptFriendRequest(name: string) {
  const myuid = (await getCurrentUserUID()) as string;
  const firestore = getFirestore();
  const targetUID = await getUIDfromName(name);

  if (targetUID !== null && myuid !== "") {
    const userRef = doc(firestore, "users", myuid as string);
    const targetRef = doc(firestore, "users", targetUID);
    try {
      await updateDoc(userRef, {
        incomingFriendRequests: arrayRemove(targetUID),
      });
      await updateDoc(targetRef, {
        outgoingFriendRequests: arrayRemove(myuid),
      });
      await updateDoc(targetRef, {
        friends: arrayUnion(myuid),
      });
      await updateDoc(userRef, {
        DirectMessages: arrayUnion(targetUID),
        friends: arrayUnion(targetUID),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export async function removeFromFriends(name: string) {
  const myuid = (await getCurrentUserUID()) as string;
  const firestore = getFirestore();
  const targetUID = await getUIDfromName(name);

  if (targetUID !== null && myuid !== "") {
    const userRef = doc(firestore, "users", myuid as string);
    const targetRef = doc(firestore, "users", targetUID);
    try {
      await updateDoc(userRef, {
        friends: arrayRemove(targetUID),
        DirectMessages: arrayRemove(targetUID),
      });
      await updateDoc(targetRef, {
        friends: arrayRemove(myuid),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export function removeFromUserFromDms(uid: string) {
  getCurrentUserUID().then((myuid) => {
    if (myuid !== null) {
      const firestore = getFirestore();
      const userRef = doc(firestore, "users", myuid as string);
      updateDoc(userRef, {
        DirectMessages: arrayRemove(uid),
      });
    }
  });
}

export async function declineFriendRequest(name: string) {
  const myuid = (await getCurrentUserUID()) as string;
  const firestore = getFirestore();
  const targetUID = await getUIDfromName(name);

  if (targetUID !== null && myuid !== "") {
    const userRef = doc(firestore, "users", myuid as string);
    try {
      await updateDoc(userRef, {
        incomingFriendRequests: arrayRemove(targetUID),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export async function cancelSendedFriendRequest(name: string) {
  const myuid = (await getCurrentUserUID()) as string;
  const firestore = getFirestore();
  const targetUID = await getUIDfromName(name);

  if (targetUID !== null && myuid !== "") {
    const userRef = doc(firestore, "users", myuid as string);
    const targetRef = doc(firestore, "users", targetUID);
    try {
      await updateDoc(userRef, {
        outgoingFriendRequests: arrayRemove(targetUID),
      });
      await updateDoc(targetRef, {
        incomingFriendRequests: arrayRemove(myuid),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export async function syncStateFromFirestore(
  dispatch: Dispatch<UnknownAction>
) {
  const myUID = (await getCurrentUserUID()) as string;
  const newUserInfo: User = (await getUserStateFromFirestore(myUID)) as User;
  dispatch(setUser(newUserInfo));
}

export function addStrangerToUserDMs(targetUID: string, myUID: string) {
  const firestore = getFirestore();
  const userRef = doc(firestore, "users", myUID);
  updateDoc(userRef, {
    DirectMessages: arrayUnion(targetUID),
  });
}

export async function findConversation(targetUID: string, myUID: string) {
  const firestore = getFirestore();
  const conversationRef = collection(firestore, "conversations");
  const q = query(
    conversationRef,
    where("members", "array-contains", targetUID)
  );

  try {
    const querySnapshot = await getDocs(q);
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      if (data.members.includes(myUID)) {
        return doc.id;
      }
    }
    return null;
  } catch (error) {
    console.error("Error searching for conversation:", error);
    throw new Error("Error searching for conversation");
  }
}

export async function createConversation(targetUID: string) {
  const myuid = (await getCurrentUserUID()) as string;

  const firestore = getFirestore();
  const conversationRef = collection(firestore, "conversations");
  const userRef = await doc(firestore, "users", myuid);
  await updateDoc(userRef, {
    DirectMessages: arrayUnion(targetUID),
  });

  const converstaionDoc = await addDoc(conversationRef, {
    members: [targetUID, myuid],
    messages: [],
  });
  return converstaionDoc.id;
}

export interface Message {
  sender: string;
  text: string;
  timestamp: number;
}

export function listenAndGetMessages(
  conversationId: string,
  callback: (messages: Message[]) => void
) {
  const db = getFirestore();
  const conversationRef = doc(db, "conversations", conversationId);

  return onSnapshot(
    conversationRef,
    (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        const messages = data.messages || [];
        callback(messages);
      } else {
        callback([]);
      }
    },
    (error) => {
      console.error("Error getting messages:", error);
    }
  );
}

export async function isNameAvaliable(name: string) {
  const db = getFirestore();
  const usersCollection = collection(db, "users");

  const q = query(usersCollection, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  if (querySnapshot.empty) return true;
  throw "auth/name-in-use";
}

export function sendMessage(conversationId: string, message: Message) {
  const db = getFirestore();
  const conversationRef = doc(db, "conversations", conversationId);
  updateDoc(conversationRef, {
    messages: arrayUnion(message),
  });
  updateMemberDm(conversationId);
}

export async function updateMemberDm(conversationId: string) {
  const db = getFirestore();
  const loggedUserUid = (await getCurrentUserUID()) as string;

  const conversationRef = doc(db, "conversations", conversationId);
  const conversationSnapshot = await getDoc(conversationRef);
  if (conversationSnapshot.exists()) {
    const conversationData = conversationSnapshot.data();
    const members = conversationData.members as string[];
    const conversationStranger = members.find(
      (member) => member !== loggedUserUid
    );
    if (conversationStranger) {
      const targetRef = doc(db, "users", conversationStranger as string);
      updateDoc(targetRef, {
        DirectMessages: arrayUnion(loggedUserUid),
      });
    }
  }
}

export async function getUsersFromUID(userIds: string[]) {
  const usersPromises = userIds.map((userId) => {
    return getUserStateFromFirestore(userId);
  });

  const users = await Promise.all(usersPromises);
  return users.filter(Boolean);
}

export async function getOnlineUsersFromUID(userIds: string[]) {
  const usersPromises = userIds.map((userId) => {
    return getUserStateFromFirestore(userId);
  });

  const users = await Promise.all(usersPromises);
  const onlineUsers = users.map((user) => {
    if (user?.status !== UserStatus.offline) {
      return user;
    }
  });
  return onlineUsers.filter(Boolean);
}

export async function getStrangerInfoFromConversation(converstaionID: string) {
  const db = getFirestore();
  const conversationRef = doc(db, "conversations", converstaionID);
  const myUID = (await getCurrentUserUID()) as string;

  const conversationDoc = await getDoc(conversationRef);
  if (conversationDoc.exists()) {
    const data = conversationDoc.data();

    if (data) {
      const members = data.members as string[];
      const strangerUID = members.find((uid) => uid !== myUID);

      if (strangerUID) {
        return (await getUserStateFromFirestore(strangerUID)) as User;
      }
    }
  }
  return null;
}

export async function updateUserState(status: UserStatus) {
  const myuid = (await getCurrentUserUID()) as string;
  const db = getFirestore();
  const collectionRef = doc(db, "users", myuid);
  updateDoc(collectionRef, {
    status: status,
  });
}
