import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo2ImageUrl from "../../img/logo2.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="fondoHome">
      <div class="text-center">
        <img
          src={logo2ImageUrl}
          className="rounded mt-5"
          alt="Logo"
          id="imgfondo"
        />
        <div className="container mt-4">
          <p className="text-white mt-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
};
