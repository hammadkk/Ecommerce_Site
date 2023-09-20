import { ADD_TO_CART } from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
