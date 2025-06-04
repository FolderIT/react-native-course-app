import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product, { CartItem } from '../../types/Product';

interface ProductSlice {
  cart: CartItem[]
}

const initialState: ProductSlice = {
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    substractFromCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem?.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== existingItem.id);
      } else if (existingItem) {
        existingItem.quantity -= 1;
      }
    },
    deleteFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart, substractFromCart } = productSlice.actions;
export default productSlice.reducer;
