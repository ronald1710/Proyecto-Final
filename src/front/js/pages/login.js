import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import imagen_login from "./../../img/fondo_login.jpg";
import perro_login from "./../../img/perro_login.png";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Link } from "react-router-dom";
//import { Navbar } from "./component/navbar";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    actions.login(email, password).then((resp) => {
      if (resp) {
        navigate("/biblioteca");
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
          <div>
            <Link to="/forgotpassword">
              <button
                className="btn btn-secondary text-white mt-2"
                type="button"
              >
                Olvido su contraseña
              </button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <button
                className="btn btn-secondary text-white mt-2"
                type="button"
              >
                Registrarse
              </button>
            </Link>
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
