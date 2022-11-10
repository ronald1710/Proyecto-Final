import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card_biblioteca } from "../component/card_biblioteca";
import fondo_biblioteca from "./../../img/fondo_biblioteca.jpg";
import { Context } from "../store/appContext";
import "../../styles/biblioteca.css";

export const Biblioteca = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      id="fondoHome"
      className="container-fluid"
      style={{ backgroundImage: `url(${fondo_biblioteca})` }}
    >
      <div className="text-center">
        <button className="btn btn-secondary mt-3 btn-opacity-75 text-white text-center mb-2 ">
          <h3>Biblioteca de Razas</h3>
        </button>
      </div>
      <div class="container text-center">
        <div class="row">
          {store.raza.map((element, i) => {
            return (
              <Card_biblioteca
                img_dog={element.img_dog}
                raza_dog={element.raza_dog}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
