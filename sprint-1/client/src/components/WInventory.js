import React from "react";

class Inventoryfe extends React.Component {
  state = {
    inventoryElements: [],
    product: {}
  };

  render() {
    const inventoryElements = this.props.inventory.map(inventorythings => {
      return (
        <div className="inventory__main">
          <div className="inventory__information">
            <div className="inventory__item">
              <h2 className="inventory__item--title">ITEM</h2>
              <h3 className="inventory__item--name">
                {inventorythings.productname}
              </h3>
              <h3 className="inventory__item--description">
                {inventorythings.productdescription}
              </h3>
            </div>
            <h2 className="inventory__lastorder">LAST ORDERED</h2>
            <h3 className="inventory__lastorder--date">
              {inventorythings.lastordered}
            </h3>
            <h2 className="inventory__location">LOCATION</h2>
            <div className="inventory__location--info">
              <h3 className="inventory__location--city">
                {inventorythings.city}
              </h3>
              <h3 className="inventory__location--country">
                {inventorythings.country}
              </h3>
            </div>
            <h2 className="inventory__quantity">QUANTITY</h2>
            <h3 className="inventory__quantity--value">
              {inventorythings.quantity}
            </h3>
            <h2 className="inventory__status">STATUS</h2>
            <h3 className="inventory__status--display">
              {inventorythings.status}
            </h3>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="inventory">
          <div className="inventory__head"></div>

          <div className="inventory__top">
            <div className="inventory__title">
              <h2 className="inventory__title--item">ITEM</h2>
              <h2 className="inventory__title--lastorder">LAST ORDERED</h2>
              <h2 className="inventory__title--location">LOCATION</h2>
              <h2 className="inventory__title--quantity">QUANTITY</h2>
              <h2 className="inventory__title--status">STATUS</h2>
            </div>
            <h2 className="inventory__title--space"> </h2>
          </div>

          <div className="inventory__maincontent">{inventoryElements}</div>
        </div>
      </>
    );
  }
}

export default Inventoryfe;
