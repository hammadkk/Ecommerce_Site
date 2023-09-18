import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <Container>
        <Link to={`/products/${id}`}>
          <Image src={image} alt={name} />
        </Link>
      </Container>
      <Footer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

const Container = styled.div`
  background: var(--clr-black);
  border-radius: var(--radius);

  &:hover img {
    opacity: 0.5;
  }

  &:hover a.link {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: var(--radius);
`;

const Footer = styled.footer`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.h5`
  margin-bottom: 0;
  font-weight: 400;
`;

const ProductPrice = styled.p`
  margin-bottom: 0;
  color: var(--clr-primary-5);
  letter-spacing: var(--spacing);
`;

export default Product;
