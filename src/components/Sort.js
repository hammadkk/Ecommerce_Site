import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

const Sort = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  return (
    <Wrapper>
      <ButtonContainer>
        <Button active={grid_view}>
          <BsFillGridFill />
        </Button>
        <Button active={!grid_view}>
          <BsList />
        </Button>
      </ButtonContainer>
      <ProductCount>{products.length} products found</ProductCount>
      <Divider />
      <SortForm>
        <SortLabel htmlFor="sort">sort by</SortLabel>
        <SortSelect name="sort" id="sort" className="sort-input">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </SortSelect>
      </SortForm>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;

    .btn-container {
      width: 50px;
    }

    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;

  button {
    background: transparent;
    border: 1px solid var(--clr-black);
    color: var(--clr-black);
    width: 1.5rem;
    border-radius: var(--radius);
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  background: ${(props) => (props.active ? "var(--clr-black)" : "transparent")};
  color: ${(props) => (props.active ? "var(--clr-white)" : "var(--clr-black)")};
`;

const ProductCount = styled.p`
  text-transform: capitalize;
  margin-bottom: 0;
`;

const Divider = styled.hr``;

const SortForm = styled.form``;

const SortLabel = styled.label`
  font-size: 1rem;
  text-transform: capitalize;
  margin-right: 2rem;
`;

const SortSelect = styled.select`
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
`;

export default Sort;
