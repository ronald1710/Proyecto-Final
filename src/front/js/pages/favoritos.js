import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/favoritos.css";
import { Card } from "../component/cards";

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
        <div className="container-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

Favoritos.propTypes = {
  match: PropTypes.object,
};
