import React from "react";
import Logo from "../Assets/Logo/Logo-instock.svg";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <h2 className="header__inventory">Inventory</h2>
      <h2 className="header__location">Locations</h2>
    </div>
  );
}

export default Header;
