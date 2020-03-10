import React from "react";
import Plus from "../Assets/Icons/SVG/Icon-add.svg";
export default function AddBtn({ condition }) {
  if (condition) {
    return (
      <div className="locations__circle">
        <img className="locations__plus" src={Plus} alt="add" />
      </div>
    );
  } else {
    return "";
  }
}
