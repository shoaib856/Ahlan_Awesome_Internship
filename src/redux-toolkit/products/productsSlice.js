import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    gettingProductsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    gettingProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    gettingProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  gettingProductsStart,
  gettingProductsSuccess,
  gettingProductsFailure,
} = productsSlice.actions;

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(gettingProductsStart());
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(gettingProductsSuccess(response.data));
  } catch (error) {
    dispatch(gettingProductsFailure(error.message));
  }
};

export default productsSlice.reducer;
