import React from "react";
import LocationsRender from "./LocationsRender";

const Locations = props => {
  return (
    <section className="locations">
      <h1 className="locations__header">Locations</h1>
      <input className="locations__search" type="text" placeholder="Search" />
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
    </section>
  );
};

export default Locations;
