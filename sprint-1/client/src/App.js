import React from "react";
import Header from "./components/header";
import Locations from "./components/Locations";
import Inventoryfe from "./components/Inventoryfe";
import ProductSummary from "./components/productSummary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

export default class App extends React.Component {
  state = {
    locations: [],
    inventory: [],
    locationOptions: [],
    product: {}
  };

  componentDidMount() {
    axios.get("api/locations").then(response => {
      this.setState({
        locations: response.data
      });
    });
    this.updateInventory();
  }

  updateProduct = newProduct => {
    this.setState({ product: newProduct, redirect: true });
    localStorage.setItem("product", JSON.stringify(newProduct));
    window.location.pathname = "/productSummary";
  };

  updateInventory = () => {
    axios.get("/api/Inventory").then(response => {
      this.setState({ inventory: response.data });
    });
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <Inventoryfe
                    updateProduct={this.updateProduct}
                    inventory={this.state.inventory}
                    updateInventory={this.updateInventory}
                  />
                );
              }}
            />
            <Route
              path="/inventory"
              render={() => {
                return (
                  <Inventoryfe
                    updateProduct={this.updateProduct}
                    inventory={this.state.inventory}
                    updateInventory={this.updateInventory}
                  />
                );
              }}
            />
            <Route
              path="/locations"
              render={() => {
                return <Locations locations={this.state.locations} />;
              }}
            ></Route>
            <Route
              path="/productSummary"
              render={() => {
                return (
                  <ProductSummary
                    product={JSON.parse(localStorage.getItem("product"))}
                  />
                );
              }}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
