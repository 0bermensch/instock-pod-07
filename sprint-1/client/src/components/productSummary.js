import React from "react";
import backIcon from "../Assets/Icons/SVG/Icon-back-arrow.svg";

export default function productSummary({ product }) {
  return (
    <div className="product">
      <div className="product__header">
        <h1 className="product__header-title">
          <img src={backIcon} alt="back-arrow" />
          &nbsp;&nbsp;{product.productname}
        </h1>
        <span className="product__header-stock">{product.status}</span>
      </div>
      <div className="product__detail">
        <div className="product__left">
          <p className="product__description-title">ITEM DESCRIPTION</p>
          <p className="product__description-description">
            {product.productdescription}
          </p>
        </div>
        <div className="product__right">
          {/* <div className="product__info">
            <div className="product__info-order">
              <p className="product__info-order-title">ORDERED BY</p>
              <p className="product__info-order-value">Mark Saunders</p>
            </div>
            <div className="product__info-ref">
              <p className="product__info-ref-title">REFERENCE NUMBER</p>
              <p className="product__info-ref-value">JK2020FD7811201</p>
            </div>
          </div> */}
          <div className="product__info">
            <div className="product__info-last-order">
              <p className="product__info-last-title">LAST ORDERED</p>
              <p className="product__info-last-value">{product.lastordered}</p>
            </div>
            <div className="product__info-location">
              <p className="product__info-location-title">LOCATION</p>
              <p className="product__info-location-value">{`${product.city}, ${product.country}`}</p>
            </div>
          </div>
          <div className="product__info-qty">
            <p className="product__info-qty-title">QUANTITY</p>
            <p className="product__info-qty-value">{product.quantity}</p>
          </div>
          <p className="product__info-category-title">CATEGORIES</p>
          <p className="product__info-category-value">
            {product.category}
            {product.id}
          </p>
        </div>
      </div>
      <div className="product__edit-button-wrap">
        <button className="product__edit-button">EDIT</button>
      </div>
    </div>
  );
}
