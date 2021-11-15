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
