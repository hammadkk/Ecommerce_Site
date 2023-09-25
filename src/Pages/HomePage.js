import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Reviews from "../components/Reviews";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Reviews />
      <Contact />
    </main>
  );
};

export default HomePage;
