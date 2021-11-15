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
