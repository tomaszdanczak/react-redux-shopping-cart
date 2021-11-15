import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
});

export default rootReducer;
