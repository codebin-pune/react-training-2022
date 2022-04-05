import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/product">product</Link>
      <br />
      <Link to="/task">task</Link>
      <br />
      <Link to="/cart">Cart</Link>
    </div>
  );
};
export default Header;
