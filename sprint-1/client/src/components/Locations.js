import React from "react";
import LocationsRender from "./LocationsRender";
<<<<<<< HEAD
import LocationsDetail from "./LocationsDetail";
import Plus from "../Assets/Icons/SVG/Icon-add.svg";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

=======
import LocationDetail from "./LocationsDetail";
import AddBtn from "./AddBtn";
import LocationTop from "./LocationTop";

import axios from "axios";
>>>>>>> master
class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locationDetail: true
    };
  }

<<<<<<< HEAD
  // locationClick = id => {
  //   axios.get(`/api/locations/${id}`).then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       locationDetail: res.data
  //     });
  //   });
  // };
=======
  locationClick = id => {
    axios.get(`/api/locations/${id}`).then(res => {
      localStorage.setItem("locationDetail", JSON.stringify(res.data));
      this.setState({
        locationDetail: false
      });
    });
  };
>>>>>>> master

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
<<<<<<< HEAD
          {this.props.locations.map(location => {
            return (
              <>
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
                <LocationsDetail
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
              </>
            );
          })}
          <div className="locations__circle">
            <img className="locations__plus" src={Plus} alt="add" />
          </div>
=======
          {renderLocation()}
          <AddBtn condition={this.state.locationDetail} />
>>>>>>> master
        </section>
        {/* <Router>
          <Switch>
            <Route path="/locations/:id" component={LocationsRender} />
          </Switch>
        </Router> */}
      </>
    );
  }
}
export default Locations;
