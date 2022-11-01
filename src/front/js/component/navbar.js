import React from "react";
import { Link } from "react-router-dom";
import logo2ImageUrl from "../../img/logo2.png";

export const Navbar = () => {
  return (
    <nav className="navbar bg-info bg-gradient bg-opacity-25 ">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo2ImageUrl} alt="logo" width="50" height="50" />
        </a>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-info bg-opacity-25 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
