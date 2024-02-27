import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/types";

export interface UserState {
  he: User[];
}

const initialState: UserState = {
  he: [],
};

const userReducer = createSlice({
  name: "UserState",
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.he.push(action.payload);
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
