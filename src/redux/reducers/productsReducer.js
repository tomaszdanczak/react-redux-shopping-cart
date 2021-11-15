import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
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
