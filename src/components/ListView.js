import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <Article key={id}>
            <ProductImagebackground>
              <Link to={`/products/${id}`}>
                <ProductImage src={image} alt={name} />
              </Link>
            </ProductImagebackground>
            <ProductDetails>
              <ProductName>{name}</ProductName>
              <ProductPrice>{formatPrice(price)}</ProductPrice>
              <ProductDescription>
                {description.substring(0, 150)}...
              </ProductDescription>
              <ProductLink to={`/products/${id}`} className="btn">
                Details
              </ProductLink>
            </ProductDetails>
          </Article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: auto 1fr;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

const ProductDetails = styled.div``;

const ProductImagebackground = styled.div`
  background: var(--clr-black);
  &:hover img {
    opacity: 0.5;
  }
`;

const ProductName = styled.h4`
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.h5`
  color: var(--clr-primary-6);
  margin-bottom: 0.75rem;
`;

const ProductDescription = styled.p`
  max-width: 45em;
  margin-bottom: 1rem;
`;

const ProductLink = styled(Link)`
  font-size: 0.5rem;
  padding: 0.25rem 0.5rem;
`;

export default ListView;
