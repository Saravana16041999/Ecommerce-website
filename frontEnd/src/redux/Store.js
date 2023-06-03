import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer/Cart";
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
