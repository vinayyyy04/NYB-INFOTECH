import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Wishlistslice";

const Store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default Store;