import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/cards";
import { Context } from "../store/appContext";
import "../../styles/biblioteca.css";

export const Biblioteca = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="fondoHome">
      <div className="container-fluid">
        <div className="ml-auto  text-center">
          <button className="btn btn-info mt-4 bg-opacity-25 text-white mb-2 ">
            <h3>Biblioteca de Razas</h3>
          </button>
        </div>
        <div className="container-flex">
          {store.biblioteca.map((element, i) => {
            return (
              <Card
                descripcion={element.descripcion}
                consejos={element.consejos}
                personalidad={element.personalidad}
                origen={element.origen}
                salud={element.salud}
                ejercicio={element.salud}
                nutricion={element.nutricio}
                aseo={element.aseo}
                raza_nino={element.raza_nino}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
