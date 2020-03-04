import React from "react";
import removebutton from "../Assets/Icons/SVG/Icon-kebab-default.svg";
import searchicon from "../Assets/Icons/SVG/Icon-search.svg";

function Inventoryfe(props) {
  console.log(props);
  let inventoryElements = props.inventoryInfo.map((inventorythings, index) => {
    return (
      <>
        <div className="inventory__information">
          <div className="inventory__item">
            <h2 className="inventory__item--title">ITEM</h2>
            <h3 className="inventory__item--name">
              {props.inventorythings.productname}
            </h3>
            <h3 className="inventory__item--description">
              {props.inventorythings.productdescription}
            </h3>
          </div>
          <h2 className="inventory__lastorder">LAST ORDERED</h2>
          <h3 className="inventory__lastorder--date">
            {props.inventorythings.lastordered}
          </h3>
          <h2 className="inventory__location">LOCATION</h2>
          <div className="inventory__location--info">
            <h3 className="inventory__location--city">
              {props.inventorythings.city}
            </h3>
            <h3 className="inventory__location--country">
              {props.inventorythings.country}
            </h3>
          </div>
          <h2 className="inventory__quantity">QUANTITY</h2>
          <h3 className="inventory__quantity--value">
            {props.inventorythings.quantity}
          </h3>
          <h2 className="inventory__status">STATUS</h2>
          <h3 className="inventory__status--display">
            {props.inventorythings.status}
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
        <input type="text" className="inventory__head--search" placeholder="" />
      </div>
      <div className="inventory__title">
        <h2 className="inventory__title--item">ITEM</h2>
        <h2 className="inventory__title--lastorder">LAST ORDERED</h2>
        <h2 className="inventory__title--location">LOCATION</h2>
        <h2 className="inventory__title--quantity">QUANTITY</h2>
        <h2 className="inventory__title--status">STATUS</h2>
      </div>
      <div className="inventory__maincontent">{inventoryElements}</div>
      <button className="inventory__additem" type="button" />
    </div>
  );
}

export default Inventoryfe;
