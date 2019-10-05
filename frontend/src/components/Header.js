import React from "react";
import { Link } from "react-router-dom";
import { APP_ROOT_ELEMENT_ID } from "../constants";
import SearchBar from "./SearchBar";
import "./Header.scss";
import Logo from "../assets/Logo_ML.png";
import Logo_2x from "../assets/Logo_ML@2x.png";

function Header() {
  return (
    <header role="banner" className="header">
      <div className="container">
        <div className="row no-wrap">
          <a
            href={`#${APP_ROOT_ELEMENT_ID}`}
            role="button"
            className="header-skip"
          >
            Ir al contenido principal
          </a>
          <Link to="/" className="col-auto col-md-1 offset-md-1 pr-md-0">
            <img
              alt="Mercado Libre"
              title="Mercado Libre Uruguay - Donde compras y vendes de todo"
              className="header-logo"
              src={Logo}
              srcSet={`${Logo} 1x, ${Logo_2x} 2x`}
            />
          </Link>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
