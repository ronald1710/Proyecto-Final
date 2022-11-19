import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { store } from "../store/flux";
import { Link } from "react-router-dom";

export const Card_favoritos = (props) => {
  /* const [favorito, setFavorito] = useState(false); */
  const { store, actions } = useContext(Context);
  /* const getFavorito = () => {
    store.favoritos.filter((id) => {
      console.log(id);
      if (props.id === props.id) {
        setFavorito(true);
      }
    });
  };
  console.log(props); */
  return (
    <div className="col">
      <div className="card m-2" style={{ width: "18rem", height: "405px" }}>
        <img
          src={props.img_dog}
          className="card-img-top text-center"
          alt={props.raza_dog}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.raza_dog}</h5>
          <div>
            <Link
              to={`/biblioteca_individual/${props.id}`}
              relative="path"
              className="btn btn-primary m-2"
            >
              Ver mas...
            </Link>
            <button
            /*  onClick={() => {
                actions.setFavorito([...store.favoritos, { id: props.id }]);
                console.log(store);
                getFavorito();
              }}
              className={favorito ? "btn btn-danger" : "btn btn-success"} */
            >
              Mi Perro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
