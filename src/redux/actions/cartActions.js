import { ActionTypes } from "../constants/action-types";

//======================================================================

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { product },
  };
};

//======================================================================

export const removeFromCart = (productId) => {
  console.log("poszło");

  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { productId },
  };
};

//======================================================================
