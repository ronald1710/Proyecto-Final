import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import imagen_login from "./../../img/fondo_login.jpg";
import perro_login from "./../../img/perro_login.png";
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
      style={{ backgroundImage: `url(${imagen_login})`, height: "500px" }}
      className=" "
    >
      <br></br>
      <br></br>
      <div className="row" id="div_principal">
        <div className="col">
          <div className=" text-center mt-2" id="info_login">
            <h1 id="titulo">
              <b>Login</b>
            </h1>
            <div className="m-2 text-center">
              <input
                className="mt-3 input-group text-center rounded-pill"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <input
                className="mt-1 input-group text-center rounded-pill"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <button
                className="btn btn-secondary text-white text-center m-2"
                onClick={handleClick}
              >
                Acceso
              </button>
              <br></br>
              <br></br>
              <div className="text-center">
                <button className="btn btn-primary text-white m-2">
                  Olvido su contraseña
                </button>
                <button className="btn btn-primary m-2 ">
                  <a href="/signup" className="text-white" id="enlace">
                    Registrarse
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="perro_login"
          className="col d-none d-md-block"
          style={{
            backgroundImage: `url(${perro_login})`,
            backgroundRepeat: "no-repeat",
            height: "auto",
          }}
        ></div>
      </div>
    </div>
  );
};
