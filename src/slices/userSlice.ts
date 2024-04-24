// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserStatus } from "../types/user.t";

const initialState: User = {
  id: "Guest",
  nickName: "Guest",
  profilePicture: "",
  name: "",
  servers: [],
  friends: [],
  outgoingFriendRequests: [],
  incomingFriendRequests: [],
  birth: "",
  DirectMessages: [],
  status: UserStatus.online,
  customStatus: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to update the entire user object
    setUser(state, action: PayloadAction<User>) {
      return action.payload;
    },
    setStatus(state, action: PayloadAction<UserStatus>) {
      state.status = action.payload;
    },
  },
});

export const { setUser, setStatus } = userSlice.actions;

export default userSlice.reducer;
