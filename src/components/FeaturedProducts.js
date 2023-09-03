import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
import { products_url } from "./data";

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      const filteredProducts = products.filter(
        (product) => product.featured === true
      );
      setFeaturedProducts(filteredProducts);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
