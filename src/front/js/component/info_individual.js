import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { store } from "../store/flux";
import { Link } from "react-router-dom";

export const Info_individual = (props) => {
  //const [favorito, setFavorito] = useState(false);
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col m-2 ">
          <img src="" alt="imagen del perro"></img>
        </div>
        <div className="col m-2">nombre de la raza</div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Descripción</h1>
          <p>Descripción aqui</p>
        </div>
        <div className="col m-2">
          <img src="" alt="imagen de Descripción"></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img src="" alt="imagen de Consejos"></img>
        </div>
        <div className="col m-2">
          <h1>Consejos</h1>
          <p>Consejos aqui</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Personalidad</h1>
          <p>Personalidad aqui</p>
        </div>
        <div className="col m-2">
          <img src="" alt="imagen de Personalidad"></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img src="" alt="imagen de Origen"></img>
        </div>
        <div className="col m-2">
          <h1>Origen</h1>
          <p>Origen aqui</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Salud</h1>
          <p>Salud aqui</p>
        </div>
        <div className="col m-2">
          <img src="" alt="imagen de Salud"></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img src="" alt="imagen de Ejercicio"></img>
        </div>
        <div className="col m-2">
          <h1>Ejercicio</h1>
          <p>Ejercicio aqui</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Nutrición</h1>
          <p>Nutrición aqui</p>
        </div>
        <div className="col m-2">
          <img src="" alt="imagen de Nutrición"></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img src="" alt="imagen deAseo"></img>
        </div>
        <div className="col m-2">
          <h1>Aseo</h1>
          <p>Aseo aqui</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Mejores razas de perros para niños</h1>
          <p>Mejores razas de perros para niños</p>
        </div>
        <div className="col m-2 mb-4">
          <img src="" alt="imagen de Mejores razas de perros para niños"></img>
        </div>
      </div>
    </div>
  );
};
