import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo2ImageUrl from "../../img/logo2.png";
import fondo_home from "../../img/fondo_home.jpg";
import home_giro from "../../img/home_giro.png";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      id="fondoHome"
      style={{ backgroundImage: `url(${fondo_home})`, height: "auto" }}
    >
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col mt-2">
              {" "}
              <img
                src={logo2ImageUrl}
                className="rounded mt-5"
                alt="Logo"
                id="imgfondo"
              />
              <p className="text-white text-center mt-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col" id="giro">
              <img
                src={home_giro}
                className="rounded mt-4"
                alt="Logo"
                id="imggiro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
