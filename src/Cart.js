import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("CartItems", cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const BackPage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="m-12">
        <button
          onClick={BackPage}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Back
        </button>
      </div>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Wellcome to Cart page...</h1>
        <button
          className="p-2 m-2 border bg-yellow-300 text-black rounded-lg text-center"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty Add Items to the Cart</h1>}
        {cartItems?.map((product) => {
          return (
            <div>
              <div className="bg-white p-4 rounded shadow w-full sm:w-5/12 md:w-6/12 lg:w-6/12 mb-4 sm:mb-0 mt-10 m-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.brand}
                    className=" m-auto w-40 rounded-lg mb-20px h-full"
                  />
                  <h1>{product.brand}</h1>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
