import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { CART_ITEMS } from "../constant";
//import { hAddToCart } from "./Singlepage";

const RenderProduct = ({item}) =>{
    const [state,setState] = useState(false);


    const hAddToCart = (id) =>{
        
        setState(true);
        setTimeout(()=>{
            setState(false);
        },5000)
        
        const currentCartItem = localStorage.getItem(CART_ITEMS);
        const arrList = currentCartItem !== null ? JSON.parse(currentCartItem) : [] ;
        const NewItem = [...arrList,id];
        localStorage.setItem(CART_ITEMS ,JSON.stringify(NewItem));
    };
    let check="add";

    return(
    <div style={{display:'flex' ,flexDirection:"row" }}>
        <div>
            <img src={item.image} alt="image" width={100}/>
        </div>
        <div style={{flex: 4 }}>
        <h3 >{item.title}</h3>
        <h4>Price:{item.price}</h4>
        <Link to={`/singlepage/${item.id}`}>View detail</Link>
        {/* //state !== false ?  */}
        <Button onClick={()=> {hAddToCart(item.id)}} text={"Add to card"} />
        {/* <Button onClick={()=> {hAddToCart(item.id)}}  text="Add"/>} */}
        </div>
    </div>);
}

const Productpage = () =>{
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then(res =>{setProduct(res.data);
        })
    },[]);
    return (
        <div>
            <h1>This is Productpage page</h1>
            { product.length > 0 ? product.map(item => <RenderProduct key={item.id} item={item} />) : <h3>Loading...</h3>}
        </div>
    )
}
export default Productpage;