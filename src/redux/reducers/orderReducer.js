import { ActionTypes } from "../constants/action-types";

const initialState = {
  order: {},
  isOrderFormOpen: false,
  isOrderDetailOpen: false,
  fetchedOrders: -1,
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

    case ActionTypes.CLEAR_ORDER:
      return { ...state, order: {} };

    //======================================================================

    case ActionTypes.FETCH_ORDERS:
      return { ...state, fetchedOrders: payload };

    //======================================================================

    default:
      return state;
  }
};
