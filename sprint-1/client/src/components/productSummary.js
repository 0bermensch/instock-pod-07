import React from "react";

export default function productSummary() {
  return (
    <div className="product">
      <div className="product__header">
        <h1 className="product__header-title"> &lt; Product Name</h1>
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
              <p className="product__info-order-title">ORDERED BY</p>
              <p className="product__info-order-value">Mark Saunders</p>
            </div>
            <div className="product__info-ref">
              <p className="product__info-ref-title">REFERENCE NUMBER</p>
              <p className="product__info-ref-value">JK2020FD7811201</p>
            </div>
          </div>
          <div className="product__info">
            <div className="product__info-last-order">
              <p className="product__info-last-title">LAST ORDERED</p>
              <p className="product__info-last-value"></p>
            </div>
            <div className="product__info-location">
              <p className="product__info-location-title">LOCATION</p>
              <p className="product__info-location-value"></p>
            </div>
          </div>
          <div className="product__info-qty">
            <p className="product__info-qty-title">QUANTITY</p>
            <p className="product__info-qty-value">120000</p>
          </div>
        </div>
        <p className="product__category-title">CATEGORIES</p>
        <p className="product__category-value">Industrial</p>
      </div>
    </div>
  );
}
