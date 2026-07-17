import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
  name: "wishlist",

  initialState: {
    cars: 0,
  },

  reducers: {
    addCar: (state) => {
      state.cars++;
    },

    removeCar: (state) => {
      state.cars--;
    },
  },
});

export const { addCar, removeCar } = wishlistslice.actions;

export default wishlistslice.reducer;