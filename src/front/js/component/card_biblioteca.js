import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { store } from "../store/flux";
import { Link } from "react-router-dom";

export const Card_biblioteca = (props) => {
  //const [favorito, setFavorito] = useState(false);
  const { store, actions } = useContext(Context);
  /* const getFavorito = () => {
    store.favoritos.filter((caracter) => {
      console.log(caracter);
      if (caracter.name === props.name) {
        setFavorito(true);
      }
    });
  };*/
  return <div></div>;
};
