import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favoritos.css";
import { Card_favoritos } from "../component/card_favoritos";

export const Favoritos = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div id="fondoHome">
      <div className="container-fluid">
        <div className="ml-auto  text-center">
          <button className="btn btn-info mt-4 bg-opacity-25 text-white mb-2 ">
            <h3>Mis razas favoritas</h3>
          </button>
        </div>
        <div className="container text-center">
          <div class="row">
            {store.raza.map((element, i) => {
              return (
                <Card_favoritos
                  id={element.id}
                  img_dog={element.img_dog}
                  raza_dog={element.raza_dog}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
