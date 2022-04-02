import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../component/Button";
import { Link } from "react-router-dom";


const RenderProduct=({product})=>{
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
             </div>
        </div>
    )
}


const ProductPage=()=>{
   const [product,setProduct]=useState([]);
    useEffect(()=>{
             axios.get("https://fakestoreapi.com/products").then((res)=>{
                 setProduct(res.data)
             });
    },[])

    return(
        <div>
       
        {
              product.map((product)=>(
              <RenderProduct key={product.id} product={product}/>))
              
        }
        </div>
    )
}
export default ProductPage