import { ActionTypes } from "../constants/action-types";

const initialState = {
  order: {},
  isOrderFormOpen: false,
  isOrderDetailOpen: false,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //======================================================================

    case ActionTypes.SHOW_ORDER_FORM:
      return { ...state, isOrderFormOpen: true };

    //======================================================================

    case ActionTypes.HIDE_ORDER_FORM:
      return { ...state, isOrderFormOpen: false };

    //======================================================================

    case ActionTypes.CREATE_ORDER:
      return { ...state, order: payload };

    //======================================================================

    case ActionTypes.SHOW_ORDER_DETAIL:
      return { ...state, isOrderDetailOpen: true };

    //======================================================================

    case ActionTypes.HIDE_ORDER_DETAIL:
      return { ...state, isOrderDetailOpen: false };

    //======================================================================

    default:
      return state;
  }
};
