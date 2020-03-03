import React from "react";
import Logo from "../Assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <nav className="header__nav">
        <div className="header__nav-inventory">
          <Link to="/">Inventory</Link>
        </div>
        <div className="header__nav-location">
          <Link to="/locations">Locations</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
