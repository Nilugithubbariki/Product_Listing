import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Product Listing</div>
        <ul className="flex space-x-4 text-xl">
          <li className="text-white hover:text-gray-300">
            <Link to="/cart">Cart({cartItems.length} items) </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
