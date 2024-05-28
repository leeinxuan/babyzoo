import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const items = [];
const initialState = { items };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    
  },
});

// export state to global
export const selectCartItems = (state) => state.cart.items;

// export actions to global
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;