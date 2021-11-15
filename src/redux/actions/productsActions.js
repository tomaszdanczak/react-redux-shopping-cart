import axios from "axios";
import { ActionTypes } from "../constants/action-types";

//======================================================================

export const featchProducts = () => async (dispatch) => {
  const { data } = await axios.get("/api/products");

  dispatch({
    type: ActionTypes.FETCH_ALL_PRODUCTS,
    payload: data,
  });
};

//======================================================================

export const sortProducts = (sort) => {
  return {
    type: ActionTypes.ORDER_PRODUCTS_BY_PRICE,
    payload: { sort },
  };
};

//======================================================================

export const filterProducts = (size) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS_BY_SIZE,
    payload: { size },
  };
};
