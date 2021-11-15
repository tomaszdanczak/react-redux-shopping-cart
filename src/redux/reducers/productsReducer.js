import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: -1,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //======================================================================

    case ActionTypes.FETCH_ALL_PRODUCTS:
      return { ...state, products: payload };
    //======================================================================
    default:
      return state;
  }
};
