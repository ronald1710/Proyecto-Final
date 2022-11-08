import React from "react";
import { Link } from "react-router-dom";
import logo2ImageUrl from "../../img/logo2.png";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark bg-gradient">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo2ImageUrl} alt="logo" width="40" height="40" />
        </a>
        <div className="text-center text-white">
          <a className="navbar-brand text-white" href="/biblioteca">
            Razas de perros
          </a>
          <a className="navbar-brand text-white" href="/buscador">
            Tu mascota ideal
          </a>
          <a className="navbar-brand text-white" href="/favoritos">
            Favoritos
          </a>
          <a className="navbar-brand text-white" href="/">
            Tu mascota
          </a>
        </div>
        <div className="ml-auto">
          {!localStorage.getItem("token") ? (
            <Link to="/login">
              <button className="btn btn-dark bg-opacity-25 text-white">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="btn btn-danger bg-opacity-25 text-white"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
