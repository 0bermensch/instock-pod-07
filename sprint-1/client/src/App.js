import React from "react";
import Header from "./components/Header";
import ProductSummary from "./components/productSummary";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProductSummary />
      </>
    );
  }
}
