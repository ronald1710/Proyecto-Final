import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import fondo_signup from "./../../img/fondo_signup.jpg";
import perro_signup from "./../../img/perro_signup.png";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import Swal from "sweetalert2";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_password] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); /* este comando evita que se rompa la pagina */
    if (password == repeat_password) {
      actions
        .signup({ email: email, password: password, name: name })
        .then((resp) => {
          alert("Todo OK");
          if (resp) {
            navigate("/favoritos");
          }
        })
        .catch((er) => {
          Swal.fire("Ocurrio un error", "Este correo ya existe", "error");
        });
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
      <div className="row" id="div_principal">
        <div className="col d-none d-md-block " id="div_perro">
          <img src={perro_signup} height="400px" width="400px"></img>
        </div>

        <div className="text-center col" id="div_signup">
          <div className="  text-white" id="div_contenido">
            <h1>Registrarse</h1>
            <form onSubmit={handleClick}>
              <div className="text-center">
                <input
                  className="input-group text-center rounded-pill"
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input
                  className="input-group text-center rounded-pill"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <input
                  className="input-group text-center rounded-pill"
                  type="password"
                  placeholder="Constraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <input
                  className=" input-group text-center rounded-pill"
                  type="password"
                  placeholder="Repetir constraseña"
                  value={repeat_password}
                  onChange={(e) => setRepeat_password(e.target.value)}
                />
                <br></br>
                <button
                  className="btn btn-secondary text-white text-center mt-2"
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
