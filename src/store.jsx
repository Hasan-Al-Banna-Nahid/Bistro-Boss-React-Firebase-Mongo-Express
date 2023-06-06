import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Components/Redux/Features/Cart/Cart";

const store = configureStore({
  reducer: {
    Counter: Cart,
  },
});
export default store;
