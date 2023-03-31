import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCartItem = (product) => {
    const newProduct = [...cart, product];
    setCart(newProduct);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleCartItem={handleCartItem}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>orderSummary</h4>
        <p>Total order: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
