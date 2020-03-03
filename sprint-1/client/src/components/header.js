import React from "react";
import Logo from "../Assets/Logo/Logo-instock.svg";

function Header() {
  return (
    <header class="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <nav class="header__nav">
        <div class="header__nav-inventory">
          <a href="./index.html">Inventory</a>
        </div>
        <div class="header__nav-location">
          <a href="./pages/show.html">Locations</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
