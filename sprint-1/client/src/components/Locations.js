import React from "react";
import LocationsRender from "./LocationsRender";
import Plus from "../Assets/Icons/SVG/Icon-add.svg";

const Locations = props => {
  return (
    <section className="locations">
      <div className="locations__top">
        <h1 className="locations__header">Locations</h1>
        <input className="locations__search" type="text" placeholder="Search" />
      </div>
      <div className="locations__labels">
        <h4 className="locations__label">warehouse</h4>
        <h4 className="locations__label">contact</h4>
        <h4 className="locations__label">contact information</h4>
        <h4 className="locations__label">categories</h4>
      </div>
      {props.locations.map(location => {
        return (
          <LocationsRender
            id={location.id}
            warehouse={location.warehouse}
            address={location.address}
            contactPerson={location.contactPerson}
            contactPosition={location.contactPosition}
            contactNumber={location.contactNumber}
            contactEmail={location.contactEmail}
            categories={location.categories}
          />
        );
      })}
      <div className="locations__circle">
        <img className="locations__plus" src={Plus} />
      </div>
    </section>
  );
};

export default Locations;
