import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";
function ProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetData = async () => {
      try {
        axios.get("https://dummyjson.com/products").then((res) => {
          console.log(res.data.products);
          setProducts(res.data.products);
        });
      } catch {
        console.log("Something went Wrong...");
      }
    };
    fetData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 lg:ml-40 md:ml-28 text-center">
      <AnimatePresence>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-4 rounded shadow w-full sm:w-5/12 md:w-6/12 lg:w-6/12 mb-4 sm:mb-0"
          >
            <Link to={`/products/${product.id}`}>
              <img src={product.images[0]} alt={product.brand} />
              <h3>{product.brand}</h3>
              <p>{product.price}</p>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default ProductPage;
