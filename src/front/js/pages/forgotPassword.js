import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import imagen_login from "./../../img/fondo_imagen.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Link } from "react-router-dom";
//import { Navbar } from "./component/navbar";

export const Forgot_password = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {};

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
          <button
            className="btn btn-secondary text-white text-center mt-2"
            onClick={handleClick}
          >
            Reestablecer contraseña
          </button>
        </div>
      </div>
    </div>
  );
};
