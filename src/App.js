import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <Routes>
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
