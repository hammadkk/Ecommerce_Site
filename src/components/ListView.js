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

            <Details>
              <ProductName>{name}</ProductName>
              <Price>{formatPrice(price)}</Price>
              <Description>{description.substring(0, 150)}...</Description>
              <ProductLink to={`/products/${id}`} className="btn">
                Details
              </ProductLink>
            </Details>
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

  @media (max-width: 900px) {
    grid-template-columns: auto;
    row-gap: 1.5rem;
  }
`;

const ProductName = styled.h4`
  margin-bottom: 0.5rem;
`;

const Price = styled.h5`
  color: var(--clr-primary-6);
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  max-width: 45em;
  margin-bottom: 1rem;
`;
const ProductImagebackground = styled.div`
  background: var(--clr-black);
  width: 300px;
  &:hover img {
    opacity: 0.5;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

const ProductLink = styled(Link)`
  font-size: 0.5rem;
  padding: 0.25rem 0.5rem;
`;

const Details = styled.div`
  padding: 2rem 0;
  @media (max-width: 900px) {
    padding: 0;
  }
`;
export default ListView;
