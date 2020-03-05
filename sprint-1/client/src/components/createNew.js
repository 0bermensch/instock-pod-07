import React from "react";
import Select from "react-select";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class createNew extends React.Component {
  state = {
    checked: false,
    status: "Out of Stock",
    button: ""
  };

  handleCheck = () => {
    if (this.state.checked === false) {
      this.setState({ status: "In Stock" });
    } else {
      this.setState({ status: "Out of Stock" });
    }
    this.setState({ checked: !this.state.checked });
  };
  buttonClicked = event => {
    this.setState({ button: event.target.name });
  };
  handlePost = event => {
    event.preventDefault();

    const productName = event.target.productName.value;
    const description = event.target.description.value;
    const lastordered = event.target.lastordered.value;
    const city = event.target.city.value;
    const country = "Canada";
    const quantity = event.target.quantity.value;
    const status = this.state.status;

    if (
      productName !== "" &&
      description !== "" &&
      lastordered !== "" &&
      city !== "" &&
      country !== "" &&
      quantity !== "" &&
      status !== ""
    ) {
      if (this.state.button === "cancel") {
        event.target.reset();
      } else {
        axios
          .post("/api/Inventory", {
            id: uuidv4(),
            productname: productName,
            productdescription: description,
            lastordered: lastordered,
            city: city,
            country: country,
            quantity: quantity,
            status: status
          })
          .then(response => {
            window.alert("Successfully added product to inventory");
            this.props.updateInventory();
          });
        event.target.reset();
      }
    } else {
      window.alert("please fill all the fields");
    }
  };

  render() {
    return (
      <form className="modal" onSubmit={this.handlePost}>
        <h1 className="modal__title">Create New</h1>
        <div className="modal__menu">
          <div className="modal__menu-left">
            <p className="modal__sub-title">PRODUCT</p>
            <input type="text" placeholder="Item Name" name="productName" />
          </div>
          <div className="modal__menu-right">
            <p className="modal__sub-title">LAST ORDERED</p>
            <input type="text" placeholder="yyyy-mm-dd" name="lastordered" />
          </div>
        </div>
        <div className="modal__menu">
          <div className="modal__menu-left">
            <p className="modal__sub-title">CITY</p>
            <input type="text" placeholder="City" name="city" />
          </div>
          <div className="modal__menu-right">
            <p className="modal__sub-title">COUNTRY</p>
            <Select
              className="modal__select"
              placeholder="Canada"
              name="country"
            />
          </div>
        </div>
        <div className="modal__menu">
          <div className="modal__menu-left">
            <p className="modal__sub-title">QUANTITY</p>
            <input type="text" placeholder="0" name="quantity" />
          </div>
          <div className="modal__menu-right">
            <p className="modal__sub-title">STATUS</p>
            <div className="modal__switch-wrapper">
              <h4>{this.state.status}</h4>
              <label className="switch">
                <input type="checkbox" onClick={this.handleCheck}></input>
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <p className="modal__sub-title">ITEM DESCRIPTION</p>
          <textarea placeholder="(Optional)" name="description"></textarea>
        </div>
        <div className="modal__btns">
          <button
            className="modal__save-btn"
            name="save"
            onClick={this.buttonClicked}
          >
            SAVE
          </button>
          <button
            className="modal__cancel-btn"
            name="cancel"
            onClick={this.buttonClicked}
          >
            CANCEL
          </button>
        </div>
      </form>
    );
  }
}
