import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { CART_ITEMS } from '../constants';

const Cart = () => {
  const [cartItem, setCartItems] = useState([]);
  
  useEffect(() => {
    const items = localStorage.getItem(CART_ITEMS);
    setCartItems(JSON.parse(items));
  }, [])

  const handleRemove = (id) => {
    
  }

  return (
    <div>
      <h1>Cart page</h1>
      <p>Current ids in cart are:</p>
      {cartItem.map(item => <p>Added item {item} <Button handleClick={() => handleRemove(item)} text={"Remove from cart"} /></p>)}
    </div>
  )
}

export default Cart;