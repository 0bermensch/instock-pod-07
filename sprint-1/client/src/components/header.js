import React from "react";
import Logo from "../Assets/Logo/Logo-instock.svg";

function Header() {
  return (
    <header class="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <nav class="header__nav">
        <div class="header__nav-list header__nav-list--active">
          <a href="./index.html">Biography</a>
        </div>
        <div class="header__nav-list">
          <a href="./pages/show.html">Shows</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
