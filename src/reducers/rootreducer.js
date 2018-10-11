import { combineReducers } from "redux";
import { cartReducer } from "./cartreducer";
import { ProductReducer } from "./productsReducer";
export const RootReducer = combineReducers({
  cart: cartReducer,
  product: ProductReducer
});
