import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Biblioteca } from "./pages/biblioteca";
import { Login } from "./pages/login";
import { Favoritos } from "./pages/favoritos";
import { Buscador } from "./pages/buscador";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Signup } from "./pages/signup";
import { Forgot_password } from "./pages/forgotPassword";
import { Restore_password } from "./pages/restorePassword";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Biblioteca />} path="/biblioteca" />
            <Route element={<Login />} path="/login" />
            <Route element={<Forgot_password />} path="/forgotpassword" />
            <Route
              element={<Restore_password />}
              path="/restorepassword/:accesstoken"
            />
            <Route element={<Signup />} path="/signup" />
            <Route
              element={localStorage.getItem("token") ? <Favoritos /> : <Home />}
              path="/favoritos"
            />
            <Route
              element={localStorage.getItem("token") ? <Buscador /> : <Home />}
              path="/buscador"
            />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
