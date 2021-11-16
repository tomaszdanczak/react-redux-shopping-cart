import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: -1,
  filtredProducts: -1,
  size: "",
  sort: "latest",
  isProductSelected: false,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //======================================================================

    case ActionTypes.FETCH_ALL_PRODUCTS:
      return { ...state, products: payload, filtredProducts: payload };

    //======================================================================

    case ActionTypes.ORDER_PRODUCTS_BY_PRICE:
      const sortedItems = [...state.filtredProducts];

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

      return { ...state, sort: payload.sort, filtredProducts: sortedItems };

    //======================================================================

    case ActionTypes.FILTER_PRODUCTS_BY_SIZE:
      const filtredProducts =
        payload.size === ""
          ? [...state.products]
          : state.products.filter(
              (x) => x.availableSizes.indexOf(payload.size) >= 0
            );

      return { ...state, size: payload.size, filtredProducts };

    //======================================================================

    case ActionTypes.SHOW_PRODUCT_DETAIL:
      return { ...state, isProductSelected: true, selectedProduct: payload };

    //======================================================================

    case ActionTypes.HIDE_PRODUCT_DETAIL:
      return {
        ...state,
        isProductSelected: false,
        selectedProduct: {},
      };

    //======================================================================

    default:
      return state;
  }
};
