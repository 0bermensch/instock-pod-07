import React from "react";
import Logo from "../Assets/Logo/Logo-instock.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} />
      <nav className="header__nav">
        <div className="header__nav-inventory">
          <a>INVENTORY</a>
        </div>
        <div className="header__nav-list">
          <a>LOCATIONS</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
