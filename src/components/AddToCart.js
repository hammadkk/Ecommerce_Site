import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);

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

export default AddToCart;
