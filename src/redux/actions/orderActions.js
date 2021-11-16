import axios from "axios";
import { ActionTypes } from "../constants/action-types";

//======================================================================

export const showOrderForm = () => {
  return {
    type: ActionTypes.SHOW_ORDER_FORM,
  };
};

//======================================================================

export const hideOrderForm = () => {
  return {
    type: ActionTypes.HIDE_ORDER_FORM,
  };
};

//======================================================================
export const createOrder = (order) => async (dispatch) => {
  const { data } = await axios.post("/api/orders", order);

  dispatch({
    type: ActionTypes.CREATE_ORDER,
    payload: data,
  });
};
