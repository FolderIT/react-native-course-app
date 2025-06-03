import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product, { CartItem } from '../../types/Product';

interface ProductSlice {
  products: Product[];
  cart: CartItem[];
}

const initialState: ProductSlice = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== action.payload?.id);
      } else {
        existingItem.quantity -= 1;
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  deleteFromCart,
  clearCart
} = productSlice.actions;

export default productSlice.reducer;
