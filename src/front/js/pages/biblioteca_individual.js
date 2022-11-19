import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Info_individual } from "../component/info_individual";
import fondo_biblioteca_individual from "./../../img/fondo_biblioteca_individual.jpg";

export const Biblioteca_individual = (props) => {
  const { store, actions } = useContext(Context);

  const params = useParams();
  console.log(store.razaIndividual);
  useEffect(() => {
    if (params?.theid) {
      actions.informacionIndividualDogs(params?.theid);
    }
  }, [params?.theid]);
  return (
    <div
      style={{
        backgroundImage: `url(${fondo_biblioteca_individual})`,
        height: "100%",
      }}
    >
      <Info_individual
        img_dog={store.razaIndividual?.img_dog}
        raza_dog={store.razaIndividual?.raza_dog}
        descripcion={store.razaIndividual2?.descripcion}
        consejos={store.razaIndividual2?.consejos}
        personalidad={store.razaIndividual2?.personalidad}
        origen={store.razaIndividual2?.origen}
        salud={store.razaIndividual2?.salud}
        ejercicio={store.razaIndividual2?.ejercicio}
        nutricion={store.razaIndividual2?.nutricion}
        aseo={store.razaIndividual2?.aseo}
        nino={store.razaIndividual2?.raza_nino}
      />
    </div>
  );
};
