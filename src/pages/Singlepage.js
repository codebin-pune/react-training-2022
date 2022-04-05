import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../component/Button";
import { CART_ITEMS } from "../constant";

const Singlepage = () =>{
    
    const {id} = useParams();
    //console.log(id);
    const [products,setProducts] = useState({});
    useEffect(()=>{
        if(id===undefined) return ;
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{setProducts(res.data)})

    },[id]);
    //console.log({setProducts});

    const hAddToCart = (id) =>{
        const currentCartItem = localStorage.getItem(CART_ITEMS);
        const arrList = currentCartItem !== null ? JSON.parse(currentCartItem) : [] ;
        const NewItem = [...arrList,id];
        localStorage.setItem(CART_ITEMS ,JSON.stringify(NewItem));
    };

    return(
    <div>
        <h1>Hello this is singlepage</h1>
        <div style={{display:'flex' ,flexDirection:"row" }}>
            <div>
                <img src={products.image} alt="image" width={100}/>
            </div>
            <div style={{flex: 4 }}>
                <h3 >{products.title}</h3>
                <h4>Price:{products.price}</h4>
                <p>{products.description}</p>
                <Button onClick={()=> hAddToCart(products.id)}  text="Add to card"/>
            </div>
        </div>
    </div>
    );
}

export default Singlepage;