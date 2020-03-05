import React from "react";
import Header from "./components/header";
import Locations from "./components/Locations";
import ProductSummary from "./components/productSummary";
import Inventoryfe from "./components/Inventoryfe";
import CreateNew from "./components/createNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

export default class App extends React.Component {
  state = {
    locations: [],
    inventory: [],
    product: {},
    locationOptions: []
  };

  componentDidMount() {
    axios.get("api/locations").then(response => {
      this.setState({
        locations: response.data[0]
      });
    });
    this.updateInventory();
  }

  updateInventory = () => {
    axios.get("/api/Inventory").then(response => {
      this.setState({ inventory: response.data });
      // to be changed dynamically.
      this.setState({ product: response.data[0] });
    });
  };

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
                    <Inventoryfe inventory={this.state.inventory} />
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
                    <CreateNew
                      inventory={this.state.inventory}
                      updateInventory={this.updateInventory}
                    />
                    <ProductSummary product={this.state.product} />
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
                    <Inventoryfe inventory={this.state.inventory} />
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
