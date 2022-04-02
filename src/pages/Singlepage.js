import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../component/Button";

const Singlepage = () =>{
    
    const {id} = useParams();
    //console.log(id);
    const [products,setProducts] = useState({});
    useEffect(()=>{
        if(id===undefined) return ;
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{setProducts(res.data)})

    },[id]);
    //console.log({setProducts});

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
                <Button onClick={()=>console.log("Added to card",products.id)}  Text="Add to card"/>
            </div>
        </div>
    </div>
    );
}

export default Singlepage;