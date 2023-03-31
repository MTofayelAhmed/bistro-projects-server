import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const handleCartItem = props.handleCartItem;
  const { img, name, seller, quantity, price, ratings, id } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price:${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating:{ratings} starts</p>
      </div>
      <button className="btn-cart" onClick={()=>handleCartItem(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
