import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MessageState {
  message: string;
}

const initialState: MessageState = {
  message: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { showMessage } = messageSlice.actions;

export default messageSlice.reducer;
