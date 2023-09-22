import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, name, color, price, amount }) => {
  return (
    <Wrapper>
      <Title>
        {/* <img src={image} alt={name} /> */}
        <div>
          <ProductName>{name}</ProductName>
          <Color>
            color:
            <ColorCircle style={{ background: color }} />
          </Color>
          <PriceSmall>{formatPrice(price)}</PriceSmall>
        </div>
      </Title>
      <Price>{formatPrice(price)}</Price>
      <AmountButtonsWrapper>
        <AmountButtons
          amount={amount}
          increase={() => {}}
          decrease={() => {}}
        />
      </AmountButtonsWrapper>
      <Subtotal>{formatPrice(price * amount)}</Subtotal>
      <RemoveButton onClick={() => {}}>
        <FaTrash />
      </RemoveButton>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
  }
`;

const Title = styled.div`
  grid-template-rows: 75px;
  display: grid;
  grid-template-columns: 75px 125px;
  align-items: center;
  text-align: left;
  gap: 1rem;

  @media (min-width: 776px) {
    height: 100%;
    display: grid;
    grid-template-columns: 100px 200px;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }
`;

const ProductName = styled.h5`
  font-size: 0.75rem;
  margin-bottom: 0;

  @media (min-width: 776px) {
    font-size: 0.85rem;
  }
`;

const Color = styled.p`
  color: var(--clr-grey-5);
  font-size: 0.75rem;
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 776px) {
    font-size: 0.85rem;
  }
`;

const ColorCircle = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: red;
  margin-left: 0.5rem;
  border-radius: var(--radius);

  @media (min-width: 776px) {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const PriceSmall = styled.h5`
  color: var(--clr-primary-5);
  font-size: 0.75rem;

  @media (min-width: 776px) {
    display: none;
  }
`;

const Price = styled.h5`
  display: none;

  @media (min-width: 776px) {
    display: block;
    font-size: 1rem;
    color: var(--clr-primary-5);
    font-weight: 400;
  }
`;

const AmountButtonsWrapper = styled.div`
  width: 75px;

  @media (min-width: 776px) {
    width: 100px;
  }

  button {
    width: 1rem;
    height: 0.5rem;
    font-size: 0.75rem;

    @media (min-width: 776px) {
      width: 1.5rem;
      height: 1rem;
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 1rem;

    @media (min-width: 776px) {
      font-size: 1.5rem;
    }
  }
`;

const Subtotal = styled.h5`
  display: none;
  margin-bottom: 0;

  @media (min-width: 776px) {
    display: block;
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
    font-size: 1rem;
  }
`;

const RemoveButton = styled.button`
  color: var(--clr-white);
  background: transparent;
  border: transparent;
  letter-spacing: var(--spacing);
  background: var(--clr-red-dark);
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  font-size: 0.75rem;
  cursor: pointer;
`;

export default CartItem;
