import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, Product }) => {
  return (
    <Wrapper>
      <Container className="section-center">
        <Heading>
          <Link to="/">Home </Link>
          {Product && <Link to="/products">/ Products</Link>}/ {title}
        </Heading>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
`;

const Container = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Heading = styled.h3`
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default BreadCrumb;
