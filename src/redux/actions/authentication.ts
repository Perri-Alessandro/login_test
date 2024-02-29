import { AppDispatch } from "../store";
import { setLogin, setError } from "../reducers/user";

export const loginUser = (credentials: { email: string; password: string }) => {
  return (dispatch: AppDispatch) => {
    fetch("http://localhost:3000/go/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login non riuscito");
        }
        return response.json();
      })
      .then((data) => {
        console.log("DATA RICEIVED", data);
        dispatch(setLogin(data.token));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};
