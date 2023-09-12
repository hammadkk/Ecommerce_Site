import React from "react";
import styled from "styled-components";
import ProductList from "../components/ProductList";
import BreadCrumb from "../components/breadcrumb";
const ProductsPage = () => {
  return (
    <main>
      <BreadCrumb title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <ProductList />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
