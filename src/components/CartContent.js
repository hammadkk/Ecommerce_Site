import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartColumns from "./CartColumns";

const CartContent = () => {
  const { cart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <LinkContainer>
        <LinkButton to="/products">continue shopping</LinkButton>
        <ClearButton type="button" onClick={() => {}}>
          Clear Shopping Cart
        </ClearButton>
      </LinkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const LinkButton = styled(Link)`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
  font-weight: 400;
  cursor: pointer;
`;

const ClearButton = styled.button`
  background: var(--clr-black);
  color: var(--clr-white);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  font-weight: 400;
`;

export default CartContent;
