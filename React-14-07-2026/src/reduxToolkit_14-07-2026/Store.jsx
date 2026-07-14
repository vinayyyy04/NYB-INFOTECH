import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./StudentSlice.jsx";

const Store = configureStore({
  reducer: {
    Student: studentReducer,
  },
});

export default Store;