import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/buscador.css";
import fondo_buscador from "./../../img/fondo_buscador.jpg";
import perro_buscador from "./../../img/perro_buscador.png";

export const Buscador = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div
      id="div_fondo"
      style={{ backgroundImage: `url(${fondo_buscador})`, height: "750px" }}
      className=" "
    >
      <h1 className="text-center  mb-2">
        Bienvenido al Selector de Razas de Perros
      </h1>
      <div id="preguntas" className="m-2">
        <h6 className="m-3 text-center" id="intro">
          Quizá sepas qué razas de perros te gustan o puede que necesites alguna
          guía para elegir una. Aquí estamos para ayudarte a encontrar a tu
          amigo ideal de cuatro patas.
        </h6>

        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Has tenido perro alguna vez?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">
              No, este será mi primer perro y tengo ganas de aprender
            </option>
            <option value="3">
              He cuidado perros antes, así que tengo algo de experiencia
            </option>
            <option value="4">Sí. Soy un dueño con mucha experiencia</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Qué nivel de adiestramiento estás dispuesto a ofrecerle?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">
              Preferiría que no necesitara mucho adiestramiento
            </option>
            <option value="3">
              Me gustan las razas que necesitan algo de adiestramiento
            </option>
            <option value="4">
              Tengo experiencia con el adiestramiento y me siento cómodo con
              cualquier raza
            </option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Qué tipo de paseos te gustaría hacer?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">Busco un perro para dar paseos tranquilos</option>
            <option value="3">
              Me gustaría ir a pasear de forma activa con mi perro
            </option>
            <option value="4">
              Me gustaría mantenerme en forma con caminatas enérgicas
            </option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Durante cuánto tiempo pasearás a tu perro cada día?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">Media hora al día</option>
            <option value="3">Una hora al día</option>
            <option value="4">Una o dos horas al día</option>
            <option value="5">Más de dos horas al día</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Tienes alguna preferencia sobre el tamaño?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">
              Me gustaría un perro mini tipo toy, que pueda llevar conmigo
            </option>
            <option value="3">Preferiría un perro pequeño</option>
            <option value="4">Un perro de tamaño mediano estaría bien</option>
            <option value="5">Me encantaría un perro grande</option>
            <option value="6">Una raza de perro gigante sería genial</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Te molesta que el perro babee?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">¿Babas? ¡Las menos posibles, por favor!</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Cuánto estás dispuesto a asearlo y cepillarlo?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">Puedo asear al perro una vez a la semana</option>
            <option value="3">Puedo asear al perro una vez a la semana</option>
            <option value="4">Puedo asearlo diariamente</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Convives con alguien alérgico a los perros?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">
              Sí, necesito una raza de perro hipoalergénica
            </option>
            <option value="2">
              No, no hay nadie con alergia a los perros en casa
            </option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Cómo de ladrador quieres que sea el perro?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">
              Prefiero perros que solo ladren de vez en cuando
            </option>
            <option value="3">
              Me encantan los perros que ladran y son expresivos
            </option>
            <option value="4">Muy expresivo</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Buscas un perro que te proteja a ti y a tu propiedad?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">No</option>
            <option value="3">Sí, que esté alerta y ladre</option>
            <option value="4">Sí, que tenga aspecto protector</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Quieres que tu perro se lleve bien con otras mascotas?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">No</option>
            <option value="3">Sí</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <button
            className="btn btn-outline-secondary text-black"
            type="button"
          >
            ¿Estás buscando un perro que se lleve bien con los niños?
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected></option>
            <option value="1">No importa</option>
            <option value="2">Sí</option>
            <option value="3">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Buscador.propTypes = {
  match: PropTypes.object,
};
