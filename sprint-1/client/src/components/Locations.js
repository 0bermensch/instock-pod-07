import React from "react";
import LocationsRender from "./LocationsRender";
import LocationDetail from "./LocationsDetail";
import AddBtn from "./AddBtn";
import LocationTop from "./LocationTop";

import axios from "axios";
class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locationDetail: true
    };
  }

  locationClick = id => {
    axios.get(`/api/locations/${id}`).then(res => {
      localStorage.setItem("locationDetail", JSON.stringify(res.data));
      this.setState({
        locationDetail: false
      });
    });
  };

  render() {
    const renderLocation = () => {
      if (this.state.locationDetail) {
        return this.props.locations.map(location => {
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
              locationClick={this.locationClick}
            />
          );
        });
      } else {
        return (
          <LocationDetail
            location={JSON.parse(localStorage.getItem("locationDetail"))[0]}
            inventory={this.props.inventory}
          />
        );
      }
    };
    return (
      <>
        <section className="locations">
          <LocationTop condition={this.state.locationDetail} />
          <div className="locations__labels">
            <h4 className="locations__label">warehouse</h4>
            <h4 className="locations__label">contact</h4>
            <h4 className="locations__label">contact information</h4>
            <h4 className="locations__label">categories</h4>
          </div>
          {renderLocation()}
          <AddBtn condition={this.state.locationDetail} />
        </section>
      </>
    );
  }
}
export default Locations;
