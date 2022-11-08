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
        window.location.reload(false);
      }
    });
  };

  return (
    // <Navbar />
    <div
      id="div_fondo"
      style={{ backgroundImage: `url(${imagen_login})`, height: "480px" }}
      className=" "
    >
      <div className=" pt-2">
        <h1 className="m-5 text-white">Login</h1>
        <div className="m-5">
          <input
            className="m-1 input-group-text"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="m-1 input-group-text"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-secondary text-white text-center mt-2"
            onClick={handleClick}
          >
            Acceso
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-secondary text-white mt-2">
            Olvido su contraseña
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-secondary text-white">Registrarse</button>
        </div>
      </div>
    </div>
  );
};
