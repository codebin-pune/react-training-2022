import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../component/Button";
import { Link } from "react-router-dom";
import TaskPage from "./TaskPage";
import { CART_ITEMS } from "../constant";


const RenderProduct=({product})=>{
    const handleAddToCart = (id) => {
        const currentCartItems = localStorage.getItem(CART_ITEMS);
        const arrayList = currentCartItems !== null ? JSON.parse(currentCartItems) : [];
        const newItems = [...arrayList, id];
        localStorage.setItem(CART_ITEMS, JSON.stringify(newItems));
      };
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
             <div style={{flex:1}}>
                 <img src={product.image} alt="product image" style={{width:200}}/>
             </div>
             <div style={{flex:4}}>
                 <h3>{product.title}</h3>
                 <p>{product.description}</p>
                 <label>Price : {product.price}</label>
                <br/>
                 
                 <Link to={`/single-product/${product.id}`}>View Details</Link>
                 <br />
        <br />
        <Button
          handleClick={() => handleAddToCart(product.id)}
          text={"Add to cart"}
        />
             </div>
        </div>
    )
}


const ProductPage=()=>{
   const [product,setProduct]=useState([]);
    useEffect(()=>{
             axios.get("https://fakestoreapi.com/products").then((res)=>{
                 setProduct(res.data)
                //  console.log(res.data)
             });
},[])


    return(
        <div>
       
        {
              product.map((item)=>(
                  <div>
              <RenderProduct key={item.id} product={item}/>
              </div>))
              
        }
       
        </div>
    )
}
export default ProductPage