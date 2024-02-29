import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { loginUser } from "../redux/actions/authentication";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authInfo = useSelector((state: RootState) => state.user.auth);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      {authInfo.token ? (
        <div>
          {/* Contenuti per l'utente autenticato */}
          <h2>Benvenuto!</h2>
        </div>
      ) : (
        <div>
          {/* Form di login */}
          <h2>Effettua il login</h2>
          {/* Input per email e password */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Bottone per il login con onClick={handleLogin} */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
