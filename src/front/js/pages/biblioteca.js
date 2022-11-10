import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import { Card } from "../component/card_biblioteca";
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
      </div>
    </div>
  );
};
