import React, { useEffect, useState } from "react";
import { Button } from "../component/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CART_ITEMS } from "../constant";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(id);
  useEffect(() => {
    if (id === undefined) return;
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const handleAddToCart = (id) => {
    const currentCartItems = localStorage.getItem(CART_ITEMS);
    const arrayList = currentCartItems !== null ? JSON.parse(currentCartItems) : [];
    const newItems = [...arrayList, id];
    localStorage.setItem(CART_ITEMS, JSON.stringify(newItems));
  };


  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <img src={product.image} alt="product image" style={{ width: 200 }} />
      </div>
      <div style={{ flex: 4 }}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <label>Price : {product.price}</label>
        <Button handleClick={() => handleAddToCart(product.id)} text="Add to Cart" />
      </div>
    </div>
  );
};
export default SingleProductPage;
