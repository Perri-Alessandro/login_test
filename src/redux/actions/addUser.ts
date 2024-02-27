import { AppDispatch } from "../store";
import { setUser } from "../reducers/user";

export const getUserAction = (id: string) => {
  return (dispatch: AppDispatch) => {
    if (!id) return;
    fetch("http://localhost:3000/go")
      .then((resp) => {
        if (resp.ok) {
          console.log(`RESPONSE OK FROM GET USER ${resp.status}`);
          return resp.json();
        } else {
          throw new Error("RESPONSE NOT OK FROM GET USER");
        }
      })
      .then((data) => {
        console.log("DATA RICEIVED FROM GET USER", data);
        dispatch(setUser(data));
      })
      .catch((err) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER, GET USER", err);
      });
  };
};

// export const getPostAction = (id: string) => {
//     return (dispatch: AppDispatch) => {
//       if (!id) return;
//       fetch("https://striveschool-api.herokuapp.com/api/posts/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       })
//         .then((resp) => {
//           if (resp.ok) {
//             console.log(`RESPONSE OK FROM GET POST ${resp.status}`);
//             return resp.json();
//           } else {
//             throw new Error("RESPONSE NOT OK FROM GET POST");
//           }
//         })
//         .then((data) => {
//           console.log("DATA RICEVUTA DA GET POST", data);
//           dispatch(setUser(data));
//         })
//         .catch((err) => {
//           console.log("ERRORE NEL CONTATTARE IL SERVER, GET POST", err);
//         });
//     };
//   };
