import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>item</Heading>
        <Heading>price</Heading>
        <Heading>quantity</Heading>
        <Heading>subtotal</Heading>
        <EmptySpan />
      </Content>
      <HorizontalRule />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 776px) {
    display: block;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr 1fr 1fr auto;
  justify-items: center;
  column-gap: 1rem;

  h5 {
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;

const Heading = styled.h5`
  color: var(--clr-grey-5);
  font-weight: 400;
`;

const EmptySpan = styled.span`
  width: 2rem;
  height: 2rem;
`;

const HorizontalRule = styled.hr`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export default CartColumns;
