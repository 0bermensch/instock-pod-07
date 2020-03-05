import React from "react";
import removebutton from "../Assets/Icons/SVG/Icon-kebab-default.svg";
import CreateNew from "../components/createNew";
import Modal from "react-responsive-modal";

class Inventoryfe extends React.Component {
  state = {
    inentoryElements: [],
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const inventoryElements = this.props.inventory.map(
      (inventorythings, index) => {
        return (
          <>
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
            <button className="inventory__remove" src={removebutton} />
          </>
        );
      }
    );
    return (
      <>

        <div className="inventory">
          <div className="inventory__head">
            <h2 className="inventory__head--title">Inventory</h2>
            <input
              type="text"
              className="inventory__head--search"
              placeholder=""
            />
          </div>
          <div className="inventory__title">
            <h2 className="inventory__title--item">ITEM</h2>
            <h2 className="inventory__title--lastorder">LAST ORDERED</h2>
            <h2 className="inventory__title--location">LOCATION</h2>
            <h2 className="inventory__title--quantity">QUANTITY</h2>
            <h2 className="inventory__title--status">STATUS</h2>
          </div>
          <div className="inventory__maincontent">{inventoryElements}</div>
          <button
            className="inventory__additem"
            type="button"
            onClick={this.onOpenModal}
          />
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal}>
          <CreateNew />
        </Modal>
      </>
    );
  }
}


export default Inventoryfe;
