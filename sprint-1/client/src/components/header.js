import React from "react";
import Logo from "../Assets/Logo/Logo-instock.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/inventory">
        <img className="header__logo" src={Logo} alt="Logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink
          to="/inventory"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          Inventory
        </NavLink>
        <NavLink
          to="/locations"
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          Locations
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
