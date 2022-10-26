import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fondoImageUrl from "../../img/fondo.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="fondoHome">
      <div>
        <p>d</p>
      </div>
    </div>
  );
};
