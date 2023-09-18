import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search"
            onChange={updateFilters}
            className="search-input"
          />
        </FormControl>
        <FormControl>
          <h5>category</h5>
          <div>
            {categories.map((c, index) => (
              <Button
                key={index}
                onClick={updateFilters}
                type="button"
                name="category"
                className={category === c.toLowerCase() ? "active" : null}
              >
                {c}
              </Button>
            ))}
          </div>
        </FormControl>
        <FormControl>
          <h5>company</h5>
          <Select
            name="company"
            value={company}
            onChange={updateFilters}
            className="company"
          >
            {companies.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <h5>colors</h5>
          <ColorContainer>
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <Button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    className={color === "all" ? "all-btn active" : "all-btn"}
                  >
                    All
                  </Button>
                );
              }
              return (
                <ColorButton
                  key={index}
                  name="color"
                  style={{ background: c }}
                  className={color === c ? "color-btn active" : "color-btn"}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c ? <FaCheck /> : null}
                </ColorButton>
              );
            })}
          </ColorContainer>
        </FormControl>
        <FormControl>
          <h5>price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />
        </FormControl>
        <FormControl className="shipping">
          <label htmlFor="shipping">Free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </FormControl>
      </form>
      <ClearButton type="button" onClick={clearFilters}>
        Clear Filters
      </ClearButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  top: 1rem;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1rem 1.5rem;
  margin-bottom: 1.25rem;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  height: fit-content;

  &:hover {
    box-shadow: var(--dark-shadow);
  }

  @media (min-width: 768px) {
    position: sticky;
  }
`;

const FormControl = styled.div`
  margin-bottom: 1.25rem;

  h5 {
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0.25em 0;
  padding: 0.25rem 0;
  text-transform: capitalize;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  letter-spacing: var(--spacing);
  color: var(--clr-grey-5);
  cursor: pointer;

  &.active {
    border-color: var(--clr-grey-5);
  }
`;

const Select = styled.select`
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  border-color: transparent;
  padding: 0.25rem;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColorButton = styled.button`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 0.5rem;
    color: var(--clr-white);
  }

  &.active {
    border: none;
    background: var(--clr-primary-5);
  }
`;
const ClearButton = styled.button`
  background: var(--clr-red-dark);
  color: var(--clr-white);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
`;
export default Filters;
