import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import fondo_signup from "./../../img/fondo_signup.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import Swal from "sweetalert2";

export const Restore_password = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_password] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); /* este comando evita que se rompa la pagina */
    if (password == repeat_password) {
      alert("Hola, evidentemenchi");
    } else {
      Swal.fire(
        "Error en la contraseña",
        "Las contraseñas no coinciden",
        "error"
      );
    }
  };

  return (
    <div
      id="div_fondo"
      style={{ backgroundImage: `url(${fondo_signup})`, height: "490px" }}
    >
      <div className="text-center" id="div_signup">
        <h1>Reestablecer contraseña</h1>
        <form onSubmit={handleClick}>
          <div>
            <div className="text-center">
              <div>
                <input
                  className="m-1 group-text text-center rounded-pill"
                  type="password"
                  placeholder="Constraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <input
                className="m-1 group-text text-center rounded-pill"
                type="password"
                placeholder="Repetir constraseña"
                value={repeat_password}
                onChange={(e) => setRepeat_password(e.target.value)}
              />
            </div>
            <button
              className="btn btn-secondary text-white text-center mt-2"
              type="submit"
            >
              Reestablecer contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
