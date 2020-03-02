import React from "react";

function Locations() {
  return (
    <div className="locations">
      <h1 className="locations__header">Locations</h1>
      <input className="locations__search" type="text" placeholder="Search" />
      <div className="locations__info">
        <div className="locations__info-section">
          <h4 className="locations__location">Warehouse Number 1</h4>
          <p className="locations__address">469 King St W, Toronto, ON</p>
        </div>
        <div className="locations__info-section">
          <p className="locations__contact-person">Mara Weinberg</p>
          <p className="locations__contact-position">Warehouse Manager</p>
        </div>
        <div className="locations__info-section">
          <p className="locations__contact-number">+1 416 678 2345</p>
          <p className="locations__contact-email">weinberg@instack.com</p>
        </div>
        <p className="locations__categories">
          Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation
        </p>
      </div>
    </div>
  );
}

export default Locations;
