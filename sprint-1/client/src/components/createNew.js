import React from "react";
import Select from "react-select";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class createNew extends React.Component {
  state = {
    checked: false,
    status: "Out of Stock",
    button: "",
    countries: [],
    selectedCountry: " CAN"
  };

  componentDidMount() {
    this.populateOptions();
  }

  // populate the options of react select from inventory.json file
  // props passed from App.js, ignores repeated country
  populateOptions = () => {
    const optionArray = [];
    const countryArray = [];
    this.props.inventory.map(inven => {
      const optionObject = {};
      if (!countryArray.includes(inven.country)) {
        optionObject.value = inven.country;
        optionObject.label = inven.country;
        countryArray.push(inven.country);
        optionArray.push(optionObject);
      }
      return optionObject;
    });
    this.setState({ countries: optionArray });
    this.props.updateInventory();
  };

  /**
   * it sets the state 'status' either to In Stock or Out of Stock
   * and also sets the state 'clicked' to true or false
   * to determine whether the toggle button is on or off
   */
  handleCheck = () => {
    if (this.state.checked === false) {
      this.setState({ status: "In Stock" });
    } else {
      this.setState({ status: "Out of Stock" });
    }
    this.setState({ checked: !this.state.checked });
  };

  // it sets the state 'button' to clicked button name
  // for deciding which button on the modal is clicked ( cancel or save )
  buttonClicked = event => {
    this.setState({ button: event.target.name });
  };

  // when the option of react select is clicked,
  // it sets the state 'selectedCountry' to the selected option

  getSelected = event => {
    this.setState({ selectedCountry: event.value });
  };

  /**
   * posts new product to express API (inventory.json) on click of save button.
   * product name, date of last ordered, city ,quantity and status (instock outofstock) required
   * description is optional
   */

  handlePost = event => {
    event.preventDefault();
    if (this.state.button === "save") {
      const productName = event.target.productName.value;
      const description = event.target.description.value;
      const lastordered = event.target.lastordered.value;
      const city = event.target.city.value;
      const country = this.state.selectedCountry;
      const quantity = event.target.quantity.value;
      const status = this.state.status;
      if (
        productName === "" ||
        lastordered === "" ||
        city === "" ||
        country === "" ||
        quantity === "" ||
        status === ""
      ) {
        window.alert("please fill all fields");
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
              placeholder="CAN"
              options={this.state.countries}
              value={this.state.selecTedCountry}
              onChange={this.getSelected}
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
            onClick={this.props.close}
          >
            CANCEL
          </button>
        </div>
      </form>
    );
  }
}
