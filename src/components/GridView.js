import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <ProductsContainer>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </ProductsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  gap: 2rem 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default GridView;
