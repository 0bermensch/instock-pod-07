import React from "react";
import removebutton from "../Assets/Icons/SVG/Icon-kebab-default.svg";
import CreateNew from "./createNew";
import ToolTip from "./ToolTip";
import Modal from "react-responsive-modal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class Inventoryfe extends React.Component {
  state = {
    inventoryElements: [],
    open: false,
    product: {},
    tool: true
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  searchHandler = event => {
    event.preventDefault();
    const names = [];
    this.props.inventory.forEach(name => {
      names.push(name.productname.toLowerCase());
    });

    const productName = event.target.search.value.toLowerCase();
    if (names.includes(productName)) {
      axios.get(`/api/Inventory/${productName}`).then(response => {
        this.setState({ product: response.data[0] });
      });
    } else {
      window.alert("item not found");
    }
  };

  openToolTip = event => {
    this.setState({
      tool: !this.state.tool,
      itemToDelete:
        event.target.parentNode.childNodes[0].firstChild.childNodes[1].innerText
    });
    localStorage.setItem(
      "itemName",
      JSON.stringify(
        event.target.parentNode.childNodes[0].firstChild.childNodes[1].innerText
      )
    );
    if (this.state.tool) {
      event.target.parentNode.childNodes[1].style.display = "block";
    } else {
      event.target.parentNode.childNodes[1].style.display = "none";
    }
  };

  render() {
    const { open } = this.state;
    const inventoryElements = this.props.inventory.map(
      (inventorythings, index) => {
        const uniqueID = uuidv4();
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

            <ToolTip
              toolId={uniqueID}
              itemToDelete={this.state.ItemToDelete}
              openToolTip={this.openToolTip}
              updateInventory={this.props.updateInventory}
            />

            <img
              onClick={this.openToolTip}
              className="inventory__remove"
              src={removebutton}
              alt="removebtn"
              id={uniqueID}
            />
          </div>
        );
      }
    );
    return (
      <>
        <div className="inventory">
          <div className="inventory__head">
            <h2 className="inventory__head--title">Inventory</h2>
            <form
              className="inventory__head--form"
              onSubmit={this.searchHandler}
            >
              <input
                name="search"
                type="text"
                className="inventory__head--search"
                placeholder="Search"
              />
            </form>
          </div>

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
          <button
            className="inventory__additem"
            type="button"
            onClick={this.onOpenModal}
          />
        </div>

        <Modal open={open} onClose={this.onCloseModal}>
          <CreateNew
            updateInventory={this.props.updateInventory}
            inventory={this.props.inventory}
            close={this.onCloseModal}
          />
        </Modal>
      </>
    );
  }
}

export default Inventoryfe;
