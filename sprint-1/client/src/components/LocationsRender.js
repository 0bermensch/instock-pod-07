import React from "react";
import Arrow from "../Assets/Icons/SVG/Icon-arrow-right.svg";
import { Link } from "react-router-dom";

const LocationsRender = props => {
  return (
    <div key={props.id} className="locations__info">
      <div className="locations__info-section locations__info-section--1">
        <div className="locations__arrow-container">
          <h4 className="locations__location">{props.warehouse}</h4>
          <img
            className="locations__arrow"
            src={Arrow}
            alt="arrow"
            onClick={() => props.locationClick(props.id)}
          />
        </div>
        <p className="locations__address">{props.address}</p>
      </div>
      <div className="locations__info-section locations__info-section--bottom">
        <p className="locations__contact-person">{props.contactPerson}</p>
        <p className="locations__contact-position">{props.contactPosition}</p>
      </div>
      <div className="locations__info-section locations__info-section--bottom">
        <p className="locations__contact-number">{props.contactNumber}</p>
        <p className="locations__contact-email">{props.contactEmail}</p>
      </div>
      <div className="locations__info-section locations__info-section--bottom locations__dt-arrow-container">
        <p className="locations__categories">{props.categories}</p>
<<<<<<< HEAD
        <Link to={`/locations/${props.id}`}>
          <img className="locations__dt-arrow" src={Arrow} alt="arrow" />
        </Link>
=======
        <img className="locations__dt-arrow" src={Arrow} alt="arrow" />
>>>>>>> master
      </div>
    </div>
  );
};
export default LocationsRender;
