import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // code logic for adding item
    },
    removeItem: (state, action) => {
      // code logic for removing item
    },
    updateQuantity: (state, action) => {
      // code logic for updating quantity
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;