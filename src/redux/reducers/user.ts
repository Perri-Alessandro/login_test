import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, Login } from "../../interfaces/types";

export interface UserState {
  he: User[];
  auth: Login;
}

const initialState: UserState = {
  he: [],
  auth: {
    token: "",
    error: "",
    userId: "",
  },
};

const userReducer = createSlice({
  name: "UserState",
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.he.push(action.payload);
    },
    setLogin(state, action: PayloadAction<string>) {
      state.auth.token = action.payload;
      state.auth.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.auth.error = action.payload;
    },
  },
});

export const { setUser, setLogin, setError } = userReducer.actions;

export default userReducer.reducer;
