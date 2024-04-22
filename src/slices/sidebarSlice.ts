import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = "@me";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    // Action to update the entire user object
    setSidebarCurrentButton(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const { setSidebarCurrentButton } = sidebarSlice.actions;

export default sidebarSlice.reducer;
