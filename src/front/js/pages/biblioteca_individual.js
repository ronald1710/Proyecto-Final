import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Info_individual } from "../component/info_individual";
import fondo_biblioteca_individual from "./../../img/fondo_biblioteca_individual.jpg";

export const Biblioteca_individual = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      style={{
        backgroundImage: `url(${fondo_biblioteca_individual})`,
        height: "100%",
      }}
    >
      <Info_individual />
    </div>
  );
};
