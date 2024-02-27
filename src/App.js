import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import ProductDetailPage from "./ProductDetails";
import Navbar from "./Navbar";
import Cart from "./Cart";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:resId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
export default App;
