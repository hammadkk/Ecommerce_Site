import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/breadcrumb";
import CartContent from "../components/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <PageWrapper>
        <EmptyCartWrapper>
          <EmptyCartText>Your cart is empty</EmptyCartText>
          <Link className="btn" to="/products">
            Fill it
          </Link>
        </EmptyCartWrapper>
      </PageWrapper>
    );
  }

  return (
    <main>
      <BreadCrumb title="Cart" />
      <CartContentWrapper>
        <CartContent />
      </CartContentWrapper>
    </main>
  );
};

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  margin-top: 2rem;
`;

const EmptyCartWrapper = styled.div`
  text-align: center;
`;

const EmptyCartText = styled.h2`
  margin-bottom: 1rem;
  text-transform: none;
`;

const CartContentWrapper = styled.div`
  text-align: center;
`;

const CartContentText = styled.h1``;

export default CartPage;
