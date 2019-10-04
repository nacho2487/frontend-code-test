import React from "react";
import { APP_ROOT_ELEMENT_ID } from "../constants/identifiers";
import SearchBar from "./SearchBar";
import "./Header.scss";
import Logo from "../assets/Logo_ML.png";
import Logo_2x from "../assets/Logo_ML@2x.png";

function Header() {
  return (
    <header role="banner" className="app-header">
      <div className="container">
        <div className="row">
          <a href={`#${APP_ROOT_ELEMENT_ID}`} role="button" className="skip">
            Ir al contenido principal
          </a>
          <a href="/" className="col-auto col-md-1 offset-md-1 pr-md-0">
            <img
              alt="Mercado Libre"
              title="Mercado Libre Uruguay - Donde compras y vendes de todo"
              className="logo"
              src={Logo}
              srcSet={`${Logo} 1x, ${Logo_2x} 2x`}
            />
          </a>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
