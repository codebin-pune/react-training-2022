import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import { CART_ITEMS } from "../constant";

const CartItem = () =>{
    
    const [itemCart,setItemCart] = useState([]);
    //const [newItemCartList,setNewItemCartList] = useState(itemCart);

     useEffect(()=>{
        const item = localStorage.getItem(CART_ITEMS);
        setItemCart(JSON.parse(item));        
     },[])

     const hRemove = (item) =>{
        console.log(item);
        const index = itemCart.findIndex((it)=> it === item);
        //const index = item;
        console.log(index);
        const NewItenList = [...itemCart.slice(0,index) , ...itemCart.slice(index+1)];
        setItemCart(NewItenList);
         console.log(itemCart);
        //setNewItemCartList(NewItenList);
        }
     
     return(
         <div>
             <h1>Hello cart page</h1>
             {/* {itemCart.map(item=> <p>key:{item.key} value:{item}</p>)} */}
             {itemCart !== null ? itemCart.map(item => <p> Added items are : {item} <Button onClick={() => {hRemove(item)}} text="X"/> </p>) : []}
         </div>
     )
};

export default CartItem;