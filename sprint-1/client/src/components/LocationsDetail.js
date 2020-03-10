<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";

export default class LocationsDetail extends Component {
  constructor() {
    super();
    this.state = {
      locationDetails: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.get(`/api/locations/${this.props.id}`).then(res => {
      console.log(res.data);
      this.setState({
        locationDetails: res.data
      });
    });
  }

  render() {
    return <div>Hello</div>;
  }
=======
import React from "react";
import WInventory from "./WInventory";

export default function LocationsDetail({ location, inventory }) {
  return (
    <>
      <div key={location.id} className="locations__info">
        <div className="locations__info-section locations__info-section--1">
          <div className="locations__arrow-container">
            <h4 className="locations__location">{location.warehouse}</h4>
          </div>
          <p className="locations__address">{location.address}</p>
        </div>
        <div className="locations__info-section locations__info-section--bottom">
          <p className="locations__contact-person">{location.contactPerson}</p>
          <p className="locations__contact-position">
            {location.contactPosition}
          </p>
        </div>
        <div className="locations__info-section locations__info-section--bottom">
          <p className="locations__contact-number">{location.contactNumber}</p>
          <p className="locations__contact-email">{location.contactEmail}</p>
        </div>
        <div className="locations__info-section locations__info-section--bottom locations__dt-arrow-container">
          <p className="locations__categories">{location.categories}</p>
        </div>
      </div>
      <WInventory inventory={inventory} />
    </>
  );
>>>>>>> master
}
