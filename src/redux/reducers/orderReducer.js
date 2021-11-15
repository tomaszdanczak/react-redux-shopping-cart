import { ActionTypes } from "../constants/action-types";

const initialState = {
  isOrderFormOpen: false,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //======================================================================

    case ActionTypes.SHOW_ORDER_FORM:
      return { ...state, isOrderFormOpen: true };

    //======================================================================

    default:
      return state;
  }
};
