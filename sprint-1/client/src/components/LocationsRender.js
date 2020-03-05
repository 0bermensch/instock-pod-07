import React from "react";

const LocationsRender = props => {
  return (
    <>
      <div className="locations__info">
        <div className="locations__info-section">
          <h4 className="locations__location">{props.warehouse}</h4>
          <p className="locations__address">{props.address}</p>
        </div>
        <div className="locations__info-section">
          <p className="locations__contact-person">{props.contactPerson}</p>
          <p className="locations__contact-position">{props.contactPosition}</p>
        </div>
        <div className="locations__info-section">
          <p className="locations__contact-number">{props.contactNumber}</p>
          <p className="locations__contact-email">{props.contactEmail}</p>
        </div>
        <p className="locations__categories">{props.categories}</p>
      </div>
    </>
  );
};

export default LocationsRender;
