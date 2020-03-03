import React from "react";
import Select from "react-select";

export default function createNew() {
  return (
    <form className="modal">
      <h1 className="modal__title">Create New</h1>
      <div className="modal__menu">
        <div className="modal__menu-left">
          <p className="modal__sub-title">PRODUCT</p>
          <input type="text" placeholder="Item Name" />
        </div>
        <div className="modal__menu-right">
          <p className="modal__sub-title">LAST ORDERED</p>
          <input type="text" placeholder="yyyy-mm-dd" />
        </div>
      </div>
      <div className="modal__menu">
        <div className="modal__menu-left">
          <p className="modal__sub-title">CITY</p>
          <input type="text" placeholder="City" />
        </div>
        <div className="modal__menu-right">
          <p className="modal__sub-title">COUNTRY</p>
          <Select className="modal__select" placeholder="Canada" />
        </div>
      </div>
      <div className="modal__menu">
        <div className="modal__menu-left">
          <p className="modal__sub-title">QUANTITY</p>
          <input type="text" placeholder="0" />
        </div>
        <div className="modal__menu-right">
          <p className="modal__sub-title">STATUS</p>
          <div className="modal__switch-wrapper">
            <h4>In stock</h4>
            <label className="modal__switch">
              <input type="checkbox" />
              <span claseName="modal__slider"></span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <p className="modal__sub-title">ITEM DESCRIPTION</p>
        <textarea name="" placeholder="(Optional)"></textarea>
      </div>
      <div className="modal__btns">
        <button className="modal__save-btn">SAVE</button>
        <button className="modal__cancel-btn">CANCEL</button>
      </div>
    </form>
  );
}
