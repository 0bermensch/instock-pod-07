import React from "react";
import axios from "axios";

export default class ToolTip extends React.Component {
  state = {
    show: false,
    deleted: false
  };

  deleteHandler = event => {
    const item = JSON.parse(localStorage.getItem("itemName"));
    axios.delete(`/api/Inventory/${item}`).then(response => {
      window.alert(`item: ${item} is deleted`);
      this.props.updateInventory();
    });
  };

  render() {
    return (
      <span
        className="inventory__removeTooltip"
        onClick={this.deleteHandler}
        id={this.props.toolId}
      >
        Remove
      </span>
    );
  }
}
