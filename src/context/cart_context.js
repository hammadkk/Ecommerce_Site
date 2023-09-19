import React, { useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider>{children}</CartContext.Provider>;
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
