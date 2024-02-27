import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
function ProductDetailPage() {
  const { resId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${resId}`).then((response) => {
      setProduct(response.data);
    });
  }, [resId]);
  if (!product) {
    return <div>Loading...</div>;
  }
  const BackPage = () => {
    navigate("/");
  };
  const handleAddItem = (resp) => {
    dispatch(addItem(resp));
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
      <h1 className="m-auto text-center text-2xl mt-11">Details Page</h1>
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
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => handleAddItem(product)}
          >
            Add to cart
          </button>
        </motion.div>
      </div>
    </>
  );
}
export default ProductDetailPage;
