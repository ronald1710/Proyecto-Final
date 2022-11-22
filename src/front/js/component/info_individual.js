import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import descripcion from "./../../img/descripcion.png";
import consejos from "./../../img/consejos.png";
import personalidad from "./../../img/personalidad.png";
import origen from "./../../img/origen.png";
import salud from "./../../img/salud.png";
import ejercicio from "./../../img/ejercicio.png";
import nutricion from "./../../img/nutricion.png";
import aseo from "./../../img/aseo.png";
import nino from "./../../img/nino.png";
import "../../styles/info_individual.css";
import { store } from "../store/flux";
import { Link } from "react-router-dom";

export const Info_individual = (props) => {
  //const [favorito, setFavorito] = useState(false);
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col m-2 ">
          <img
            src={props.img_dog}
            alt={props.raza_dog}
            height="300px"
            width="300px"
            className="rounded m-2"
            id="foto_individual"
          ></img>
        </div>
        <div className="col m-2">
          <h1>{props.raza_dog}</h1>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Descripción</h1>
          <h6>{props.descripcion}</h6>
        </div>
        <div className="col m-2">
          <img
            src={descripcion}
            height="300px"
            width="300px"
            alt="imagen de Descripción"
          ></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img
            src={consejos}
            height="250px"
            width="400px"
            alt="imagen de Consejos"
          ></img>
        </div>
        <div className="col m-2">
          <h1>Consejos</h1>
          <h6>{props.consejos}</h6>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Personalidad</h1>
          <h6>{props.personalidad}</h6>
        </div>
        <div className="col m-2">
          <img
            src={personalidad}
            height="250px"
            width="250px"
            alt="imagen de Personalidad"
          ></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img
            src={origen}
            height="250px"
            width="250px"
            alt="imagen de Origen"
          ></img>
        </div>
        <div className="col m-2">
          <h1>Origen</h1>
          <h6>{props.origen}</h6>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Salud</h1>
          <h6>{props.salud}</h6>
        </div>
        <div className="col m-2">
          <img
            src={salud}
            height="250px"
            width="250px"
            alt="imagen de Salud"
          ></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img
            src={ejercicio}
            height="250px"
            width="400px"
            alt="imagen de Ejercicio"
          ></img>
        </div>
        <div className="col m-2">
          <h1>Ejercicio</h1>
          <h6>{props.ejercicio}</h6>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Nutrición</h1>
          <h6>{props.nutricion}</h6>
        </div>
        <div className="col m-2">
          <img
            src={nutricion}
            height="250px"
            width="400px"
            alt="imagen de Nutrición"
          ></img>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <img
            src={aseo}
            height="250px"
            width="250px"
            alt="imagen deAseo"
          ></img>
        </div>
        <div className="col m-2">
          <h1>Aseo</h1>
          <h6>{props.aseo}</h6>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col m-2">
          <h1>Mejores razas de perros para niños</h1>
          <h6>{props.nino}</h6>
        </div>
        <div className="col m-2 mb-4">
          <img
            src={nino}
            height="250px"
            width="400px"
            alt="imagen de Mejores razas de perros para niños"
          ></img>
        </div>
      </div>
    </div>
  );
};
