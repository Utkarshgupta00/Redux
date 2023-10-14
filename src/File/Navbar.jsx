import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div className="flex items-center justify-between bg-blue-500 p-4">
      <span className="text-white text-2xl">Redux Tutorial</span>
      <Link to="/" className="navLink text-white mx-2">HOME</Link>
      <Link to="/cart" className="navLink text-white mx-2">CART</Link>
      <span className="text-white">Items: {items.length}</span>
    </div>
  );
};

export default Navbar;
