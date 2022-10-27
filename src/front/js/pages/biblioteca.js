import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/cards";
import { Context } from "../store/appContext";

export const Biblioteca = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Card />
    </div>
  );
};
