import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = [], { type, payload }) => {
  let newCartItems = [];

  switch (type) {
    //======================================================================

    case ActionTypes.ADD_TO_CART:
      newCartItems = [...state];
      let alreadyInCart = false;

      newCartItems.forEach((cartItem) => {
        if (cartItem._id === payload.product._id) {
          cartItem.count++;
          alreadyInCart = true;
        }
      });

      if (!alreadyInCart) {
        newCartItems = [...state, { ...payload.product, count: 1 }];
      }

      return [...newCartItems];

    //======================================================================

    case ActionTypes.REMOVE_FROM_CART:
      newCartItems = state.filter(
        (cartItem) => cartItem._id !== payload.productId
      );

      return [...newCartItems];

    //======================================================================

    default:
      return state;
  }
};
