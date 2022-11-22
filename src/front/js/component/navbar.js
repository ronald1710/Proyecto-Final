import React from "react";
import { Link } from "react-router-dom";
import logo2ImageUrl from "../../img/logo2.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo2ImageUrl} alt="logo" width="40" height="40" />
        </a>
        <div className="ml-auto">
          <button
            className="navbar-toggler bg-dark p-2 text-white text-center bg-opacity-90"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-filter-square"></i>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a
                  className="nav-link active  text-white"
                  aria-current="page"
                  href="/biblioteca"
                >
                  Razas de perros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/buscador">
                  Tu mascota ideal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/favoritos">
                  Favoritos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Tu mascota
                </a>
              </li>
            </ul>
          </div>
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
