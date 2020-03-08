import React from "react";

export default function ToolTip(props) {
  const deleteHandler = event => {
    event.preventDefault();
  };

  if (props.toolTip) {
    return (
      <span className="inventory__removeTooltip" onClick={deleteHandler}>
        Remove
      </span>
    );
  }
  return <></>;
}
