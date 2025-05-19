import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductSlice {
  products: object[];
}

const initialState: ProductSlice = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<object[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
