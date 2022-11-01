import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import imagen_login from "./../../img/fondo_imagen.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    actions.login(email, password).then((resp) => {
      if (resp) {
        navigate("/favoritos");
      }
    });
  };

  return (
    <div
      id="div_fondo"
      style={{ backgroundImage: `url(${imagen_login})`, height: "490px" }}
    >
      <div className="text-center ">
        <h1>Acceso</h1>
        <div>
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
          <button onClick={handleClick}>Acceso</button>
        </div>
      </div>
    </div>
  );
};
