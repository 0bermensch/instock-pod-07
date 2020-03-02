import React from "react";
import logo from "../Assets/Logo/Logo-instock.svg";

export default function header() {
  return (
    <header class="header">
      <img src={logo} />
      <nav class="header__nav">
        <div class="header__nav-list header__nav-list--active">
          <Link to="/">Inventory</Link>
        </div>
        <div class="header__nav-list">
          <Link to="/locations">Locations</Link>
        </div>
      </nav>
    </header>
  );
}
