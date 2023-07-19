import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="banner">
      <img className="bannerlogo" alt="logo kansas" src={logo} />
      <div className="bannerlinkcontainer">
        <NavLink exact to="/" activeClassName="active" className="bannerlink">
          Accueil
        </NavLink>
        <NavLink to="/about" activeClassName="active" className="bannerlink">
          À propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
