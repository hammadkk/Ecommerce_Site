import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => Math.min(oldAmount + 1, stock));
  };

  const decrease = () => {
    setAmount((oldAmount) => Math.max(oldAmount - 1, 1));
  };

  return (
    <Wrapper>
      <Colors>
        <span>colors :</span>
        <ColorContainer>
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              style={{ background: color }}
              isActive={mainColor === color}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color && <FaCheck />}
            </ColorButton>
          ))}
        </ColorContainer>
      </Colors>
      <ButtonContainer>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: 125px 1fr;
  align-items: center;
  margin-bottom: 1rem;

  span {
    text-transform: capitalize;
    font-weight: 700;
  }
`;

const ColorContainer = styled.div`
  display: flex;
`;

const ColorButton = styled.button`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #222;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 0.75rem;
    color: var(--clr-white);
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
