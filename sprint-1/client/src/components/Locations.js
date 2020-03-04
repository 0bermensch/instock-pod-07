import React from "react";

const Locations = props => {
  console.log(props);

  return (
    <div className="locations">
      <h1 className="locations__header">Locations</h1>
      <input className="locations__search" type="text" placeholder="Search" />
      <div className="locations__info">
        <div className="locations__info-section">
          <h4 className="locations__location">{props.locations.warehouse}</h4>
          <p className="locations__address">{props.locations.address}</p>
        </div>
        <div className="locations__info-section">
          <p className="locations__contact-person">
            {props.locations.contactPerson}
          </p>
          <p className="locations__contact-position">
            {props.locations.contactPosition}
          </p>
        </div>
        <div className="locations__info-section">
          <p className="locations__contact-number">
            {props.locations.contactNumber}
          </p>
          <p className="locations__contact-email">
            {props.locations.contactEmail}
          </p>
        </div>
        <p className="locations__categories">{props.locations.categories}</p>
      </div>
    </div>
  );
};

export default Locations;
