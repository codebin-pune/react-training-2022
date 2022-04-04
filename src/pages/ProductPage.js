import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { CART_ITEMS } from "../constants";

const RenderProduct = ({ product }) => {
  const handleAddToCart = (id) => {
    const currentCartItems = localStorage.getItem(CART_ITEMS);
    const arrayList = currentCartItems !== null ? JSON.parse(currentCartItems) : [];
    const newItems = [...arrayList, id];
    localStorage.setItem(CART_ITEMS, JSON.stringify(newItems));
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <img src={product.image} alt="product" style={{ width: 200 }} />
      </div>
      <div style={{ flex: 4 }}>
        <h3>{product.title}</h3>
        <label>Price: {product.price}</label>
        <br />
        <br />
        <Link to={`/single-product/${product.id}`}>View Details</Link>
        <br />
        <br />
        <Button
          handleClick={() => handleAddToCart(product.id)}
          text={"Add to cart"}
        />
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <h1>This is the Products page</h1>
      {products.map((product) => (
        <RenderProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
