import React from "react";
import Header from "./components/header";
import Locations from "./components/Locations";
import ProductSummary from "./components/productSummary";
import CreateNew from "./components/createNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

export default class App extends React.Component {
  state = {
    locations: []
  };

  componentDidMount() {
    axios.get("api/locations").then(response => {
      this.setState({
        locations: response.data[0]
      });
    });
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <>
                    <Header />
                    <CreateNew />
                  </>
                );
              }}
            />
            <Route
              path="/productSummary"
              render={() => {
                return (
                  <>
                    <Header />
                    <ProductSummary />
                  </>
                );
              }}
            ></Route>
            <Route
              path="/inventory"
              render={() => {
                return (
                  <>
                    <Header />
                    <Inventoryfe />
                  </>
                );
              }}
            />
            <Route
              path="/locations"
              render={() => {
                return (
                  <>
                    <Header />
                    <Locations locations={this.state.locations} />
                  </>
                );
              }}
            ></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
