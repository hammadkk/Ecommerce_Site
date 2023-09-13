import React from "react";
import { useFilterContext } from "../context/filter_context";
import ListView from "./ListView";
import GridView from "./GridView";
import styled from "styled-components";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <NoProductsMessage>
        Sorry, no products matched your search.
      </NoProductsMessage>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

const NoProductsMessage = styled.h5`
  text-transform: none;
`;

export default ProductList;
