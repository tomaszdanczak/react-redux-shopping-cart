import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: -1,
  sort: "latest",
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //======================================================================

    case ActionTypes.FETCH_ALL_PRODUCTS:
      return { ...state, products: payload };

    //======================================================================

    case ActionTypes.ORDER_PRODUCTS_BY_PRICE:
      const sortedItems = [...state.products];

      if (payload.sort === "latest") {
        sortedItems.sort((a, b) => {
          return a._id > b._id ? 1 : -1;
        });
      } else if (payload.sort === "lowest") {
        sortedItems.sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        });
      } else if (payload.sort === "highest") {
        sortedItems.sort((a, b) => {
          return a.price < b.price ? 1 : -1;
        });
      }

      return { ...state, sort: payload.sort, products: sortedItems };

    //======================================================================

    default:
      return state;
  }
};
