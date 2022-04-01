import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Products</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/tasks">Tasks</Link>
      <br />
    </nav>
  )
}

export default Header;