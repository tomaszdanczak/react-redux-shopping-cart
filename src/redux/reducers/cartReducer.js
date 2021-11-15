import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    //======================================================================
    case ActionTypes.ADD_TO_CART:
      let newCartItems = [];

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

    default:
      return state;
  }
};
