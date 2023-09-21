import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <PageWrapper>
        <EmptyCartWrapper>
          <EmptyCartText>Your cart is empty</EmptyCartText>
          <FillCartLink to="/products">Fill it</FillCartLink>
        </EmptyCartWrapper>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHero title="Cart" />
      <CartContentWrapper>
        <CartContentText>Cart content will be here</CartContentText>
      </CartContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const EmptyCartWrapper = styled.div`
  text-align: center;
`;

const EmptyCartText = styled.h2`
  margin-bottom: 1rem;
  text-transform: none;
`;

const FillCartLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #333;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

const CartContentWrapper = styled.div`
  text-align: center;
`;

const CartContentText = styled.h1``;

export default CartPage;
