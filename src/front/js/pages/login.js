import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import imagen_login from "../../img/imagen_login.png";
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
    <div id="div_fondo">
      <div>
        <img
          /*src={imagen_login}*/
          className="img-fluid rounded-start"
          alt="imagen_login"
          id="imagen_login"
        />
      </div>
      <div></div>
    </div>
  );
};
