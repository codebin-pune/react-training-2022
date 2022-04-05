import React, { useEffect, useState } from "react";
import { Button } from "../component/Button";
import { CART_ITEMS } from "../constant";

const Cart = () => {
  const [cartItem, setCartItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem(CART_ITEMS);

    setCartItems(JSON.parse(items));
  }, []);

  const handleRemove = (it) => {
    //  console.log(it)
    const index = cartItem.findIndex((item) => item === it);
    const newList = [...cartItem.slice(0, index), ...cartItem.slice(index + 1)];
    setCartItems(newList);
    console.log(cartItem)
    let devicesArray  = JSON.parse(localStorage.getItem("cart_items"))
    console.log()
        devicesArray.splice(index, 1)
        localStorage.setItem("cart_items", JSON.stringify(devicesArray));
   
  };

  return (
    <div>
      <h1>Cart page</h1>
      <p>Current ids in cart are:</p>
      {cartItem !== null
        ? cartItem.map((item) => (
            <p key={item.id}>
              Added item {item}{" "}
              <Button
                handleClick={() => handleRemove(item)}
                text={"Remove from cart"}
              />
            </p>
          ))
        : []}
    </div>
  );
};

export default Cart;
