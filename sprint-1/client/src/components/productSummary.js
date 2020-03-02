import React from "react";

export default function productSummary() {
  return (
    <div className="product">
      <div className="product__header">
        <h1 className="product__header-title">Product Name</h1>
        <span className="product__header-stock">In Stock</span>
      </div>
      <div className="product__detail">
        <div className="product__left">
          <p className="product__description-title">ITEM DESCRIPTION</p>
          <p className="product__description-description">desc</p>
        </div>
        <div className="product__right">
          <div className="product__info">
            <div className="product__info-order">
              <p className="product__info-order-by">ORDERED BY</p>
              <p className="product__info-order-name">Mark Saunders</p>
            </div>
            <div className="product__info-ref">
              <p className="product__info-ref-ref">REFERENCE NUMBER</p>
              <p className="product__info-ref-number">JK2020FD7811201</p>
            </div>
          </div>
          <div>
            <div>
              <p>LAST ORDERED</p>
              <p></p>
            </div>
            <div>
              <p>LOCATION</p>
              <p></p>
            </div>
          </div>

          <div>
            <p>QUANTITY</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
