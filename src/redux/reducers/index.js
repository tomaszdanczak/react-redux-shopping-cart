import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  orderState: orderReducer,
});

export default rootReducer;
