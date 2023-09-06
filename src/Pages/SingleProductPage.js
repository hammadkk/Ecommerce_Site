import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import BreadCrumb from "../components/breadcrumb";
import { single_product_url } from "../components/data";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { formatPrice } from "../utils/helpers";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const SingleProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const fetchProduct = async (url) => {
    try {
      const response = await axios.get(url);
      const productData = response.data;
      setProduct(productData);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(`${single_product_url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <BreadCrumb title={name} Product />
      <ProductSection>
        <Link to="/products" className="btn">
          back to products
        </Link>
        <ProductContainer>
          <ProductImages images={images} />
          <ContentSection>
            <ProductTitle>{name}</ProductTitle>
            <Stars stars={stars} reviews={reviews} />
            <Price>{formatPrice(price)}</Price>
            <Description>{description}</Description>
            <Info>
              <InfoSpan>Available :</InfoSpan>
              {stock > 0 ? "In stock" : "out of stock"}
            </Info>
            <Info>
              <InfoSpan>SKU :</InfoSpan>
              {sku}
            </Info>
            <Info>
              <InfoSpan>Brand :</InfoSpan>
              {company}
            </Info>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </ContentSection>
        </ProductContainer>
      </ProductSection>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* Styles for Wrapper component */
`;

const ProductSection = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 5rem 0;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

const ProductContainer = styled.div`
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentSection = styled.section``;

const ProductTitle = styled.h2``;

const Price = styled.h5`
  color: var(--clr-primary-5);
`;

const Description = styled.p`
  line-height: 2;
  max-width: 45em;
`;

const Info = styled.p`
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;

  span {
    font-weight: 700;
  }
`;

const InfoSpan = styled.span`
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
`;

export default SingleProductPage;
