import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    if (id === undefined) return;
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <img src={product.image} alt="product" style={{ width: 200 }} />
      </div>
      <div style={{ flex: 4 }}>
        <h3>{product.title}</h3>
        <label>Price: {product.price}</label>
        <p>{product.description}</p>
        <Button
          handleClick={() => console.log("add to card", product.id)}
          text="Add to cart"
        />
      </div>
    </div>
  );
};

export default SingleProduct;
