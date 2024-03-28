import React, { useRef } from "react";
import { addFriend, syncStateFromFirestore } from "../../../firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const DisplayAddFriend = () => {
  const userinput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="font-ggsansNormal  bg-LightGray">
      <h2>ADD FRIEND</h2>
      <p>You can add friends with their Discord usernames</p>
      <input type="text" ref={userinput} />
      <button
        onClick={async () => {
          await addFriend(userinput.current?.value as string);
          await syncStateFromFirestore(dispatch);
          console.log(user);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default DisplayAddFriend;
