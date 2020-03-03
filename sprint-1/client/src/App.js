import React from "react";
import Header from "./components/header";
import Locations from "./components/Locations";
import ProductSummary from "./components/productSummary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Header />;
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
              path="/locations"
              render={() => {
                return (
                  <>
                    <Header />
                    <Locations />
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
