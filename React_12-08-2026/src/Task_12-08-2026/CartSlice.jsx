import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },

    removeProduct: (state, action) => {
      state.items = state.items.filter(
        (item) => item !== action.payload
      );
    }
  }
});

export const { addProduct, removeProduct } = CartSlice.actions;

export default CartSlice.reducer;