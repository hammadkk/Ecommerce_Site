import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SingleProductPage from "./Pages/SingleProductPage";
import Products from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
