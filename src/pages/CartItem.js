import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import { CART_ITEMS } from "../constant";

const CartItem = () =>{
    
    const [itemCart,setItemCart] = useState([]);

     useEffect(()=>{
        const item = localStorage.getItem(CART_ITEMS);
        setItemCart(JSON.parse(item));        
     },[])

     const hRemove = (item) =>{
        console.log(item);
        const index = itemCart.findIndex((it)=> it === item);
        console.log(index);
        const NewItenList = [...itemCart.slice(0,index) , ...itemCart.slice(index+1)];
        setItemCart(NewItenList);
        //const NewRMData = JSON.parse(localStorage.getItem("cart_items")); 
        //console.log(NewRMData); 
        //NewRMData.splice(index,1); 
        localStorage.setItem(CART_ITEMS ,JSON.stringify(NewItenList)); //NewItenList = NewRMData
        //console.log(itemCart); 
        //setNewItemCartList(NewItenList); 
        }
     
     return(
         <div>
             <h1>Hello cart page</h1>
             {itemCart !== null ? itemCart.map(item => <p> Added items are : {item} <Button onClick={() => {hRemove(item)}} text="X"/> </p>) : []}
         </div>
     )
};

export default CartItem;