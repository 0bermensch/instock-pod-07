import React from "react";

export default function LocationTop({ condition }) {
  if (condition) {
    return (
      <div className="locations__top">
        <h1 className="locations__header">Locations</h1>
        <form>
          <input
            className="locations__search"
            type="text"
            name="search"
            placeholder="Search"
          />
        </form>
      </div>
    );
  } else {
    return "";
  }
}
