import { User } from "../../interfaces/types";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

interface AddUserRequestAction {
  type: typeof ADD_USER_REQUEST;
}

interface AddUserSuccessAction {
  type: typeof ADD_USER_SUCCESS;
  payload: User;
}

interface AddUserFailureAction {
  type: typeof ADD_USER_FAILURE;
  error: string;
}

export type UserActionTypes =
  | AddUserRequestAction
  | AddUserSuccessAction
  | AddUserFailureAction;
