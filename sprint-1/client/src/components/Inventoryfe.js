import React from "react";
import removebutton from "../Assets/Icons/SVG/Icon-kebab-default.svg";

function Inventoryfe() {
  let inventoryElements = props.inventoryInfo.map((inventorythings, index) => {
    return (
      <>
        <div className="inventory__information">
          <h2 className="inventory__item">ITEM</h2>
          <h3 className="inventory__item--name">
            {inventorythings.productname}
          </h3>
          <h3 className="inventory__item--description">
            {inventorythings.productdescription}
          </h3>
          <h2 className="inventory__lastorder">LAST ORDERED</h2>
          <h3 className="inventory__lastorder--date">
            {inventorythings.lastordered}
          </h3>
          <h2 className="inventory__location">LOCATION</h2>
          <h3 className="inventory__location--city">{inventorythings.city}</h3>
          <h3 className="inventory__location--country">
            {inventorythings.country}
          </h3>
          <h2 className="inventory__quantity">QUANTITY</h2>
          <h3 className="inventory__quantity--value">
            {inventorythings.quantity}
          </h3>
          <h2 className="inventory__status">STATUS</h2>
          <h3 className="inventory__status--display">
            {inventorythings.status}
          </h3>
        </div>
        <button className="inventory__remove" src={removebutton} />
      </>
    );
  });
  return (
    <div className="inventory">
      <div className="inventory__head">
        <h2 className="inventory__head--title">Inventory</h2>
        <input type="text" className="inventory__head--search" />
      </div>
      <div className="inventory__maincontent">{inventoryElements}</div>
      <button className="inventory__additem" type="button" />
    </div>
  );
}

export default Inventoryfe;